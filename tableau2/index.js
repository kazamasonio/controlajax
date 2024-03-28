$(document).ready(function () {
  var contenuTd;

  var tabFusion = [];
  var Fusion;
  var table1;
  var tableau;
  class creaTable {
    select;
    ligne;
    colonne;
    FusionC = [];
    FusionL = [];
    constructor(ligne, colonne) {
      this.ligne = ligne;
      this.colonne = colonne;
      this.select = $("<table  id='tableau'></table>");
      $("#conteneur").append(this.select);
      this.select.show();
    }
    tableCreation() {
      let tableau;
      for (let i = 0; i < this.ligne; i++) {
        tableau += "<tr class='trTable'>";
        for (let j = 0; j < this.colonne; j++) {
          if (i == 0) {
            tableau += "<th class='thTable'>Titre" + j + "</th>";
          } else {
            tableau += "<td class='tdTable'>Detail" + j + i + "</td>";
          }
        }
        tableau += "</tr>";
      }
      return tableau;
    }
    SetLigne(me) {
      let nombreL = $(me).parent().index();
      if (this.FusionL == "" || this.FusionC == "") {
        this.FusionL = [];
        this.FusionL.push($(me).index());
      }
      if (
        $(me).css("color") == "rgb(0, 0, 0)" &&
        !this.FusionC.includes(nombreL) &&
        this.FusionL.includes($(me).index()) &&
        this.FusionL.length == 1
      ) {
        this.FusionC.push(nombreL);
        $(me).css("color", "red");
        /*-------------------------------------*/
        // envoyer vers getColonne
      } else if (this.FusionC.length == 1 && this.FusionL.length >= 1) {
        this.SetColonne(me);
      } else if (
        $(me).css("color") == "rgb(255, 0, 0)" &&
        this.FusionC.length >= 1
      ) {
        $(me).css("color", "black");
        this.FusionC = this.FusionC.filter(function (element) {
          return element !== nombreL;
        });
      }
      // &&
      // !this.FusionL.includes($(me).index())
      // (this.FusionC.includes(nombreL) ||
      //    && this.FusionC.length == 1))
      else {
        alert("Vous ne pouvez selection cette case pour le fusion");
      }
      // this.FusionC;
    }

    SetColonne(me) {
      let nombreC = $(me).index();

      if (
        $(me).css("color") == "rgb(0, 0, 0)" &&
        !this.FusionL.includes(nombreC) &&
        this.FusionC.includes($(me).parent().index())
      ) {
        this.FusionL.push(nombreC);
        $(me).css("color", "red");
      } else if (
        ($(me).css("color") == "rgb(0, 0, 0)" &&
          this.FusionL.includes(nombreC)) ||
        !this.FusionC.includes($(me).parent().index())
      ) {
        alert("Vous ne pouvez selection cette case pour le fusion");
      } else {
        $(me).css("color", "black");
        this.FusionL = this.FusionL.filter(function (element) {
          return element !== nombreC;
        });
        if (this.FusionL == "") {
          this.FusionC = [];
        }
      }
    }

    getColonne() {
      return this.FusionL;
    }
    getLigne() {
      return this.FusionC;
    }
    fusionColonne(nbColFusion, ligne, colonne, table = $("#tableau")) {
      alert("rein");
      if (nbColFusion > 1) {
        if (
          ligne - 1 < table.rows.length &&
          colonne - 1 < table.rows[0].cells.length
        ) {
          table.rows[ligne - 1].cells[colonne - 1].colSpan = nbColFusion;
          for (let i = 0; i < nbColFusion - 1; i++) {
            table.rows[ligne - 1].deleteCell(colonne);
          }
          $(".thTable, .tdTable").css("color", "black");
          this.FusionC = [];
          this.FusionL = [];
        } else {
          alert(
            "Veuillez entrer des valeurs valides pour la ligne et la colonne."
          );
        }
      } else {
        alert("veuillez selection les tables a fusion ");
      }
    }

    fusionLigne(nbRowFusion, ligne, colonne, table = $("#tableau")) {
      if (nbRowFusion > 1) {
        if (
          ligne - 1 < table.rows.length &&
          colonne - 1 < table.rows[0].cells.length
        ) {
          table.rows[ligne - 1].cells[colonne - 1].rowSpan = nbRowFusion;
          for (let i = 0; i < nbRowFusion - 1; i++) {
            table.rows[ligne + i].deleteCell(colonne - 1);
          }
          $(".thTable, .tdTable").css("color", "black");
          this.FusionC = [];
          this.FusionL = [];
        } else {
          alert(
            "Veuillez entrer des valeurs valides pour la ligne et la colonne."
          );
        }
      } else {
        alert("veuillez selection les tables a fusion ");
      }
    }

    affichager(tableau) {
      $("#tableau").html(tableau);
    }
    enregistrement(nom) {
      if (this.FusionL.length >= this.FusionC.length) {
        var rowSpan = this.FusionL.length;
        var colSpan = 1;
        var col = this.FusionL[0] + 1;
        var lign = Math.min.apply(null, this.FusionC) + 1;
      } else {
        var rowSpan = 1;
        var colSpan = this.FusionC.length;
        var col = Math.min.apply(null, this.FusionL) + 1;
        var lign = this.FusionC[0] + 1;
      }
      $.ajax({
        url: "page/insertion.php",
        type: "post",
        data: {
          nom: nom,
          tablecolonne: this.colonne,
          tableligne: this.ligne,
          ligne: lign,
          colonne: col,
          rowSpan: rowSpan,
          colSpan: colSpan,
        },
        success: function (retour) {
          alert(retour);
        },
      });
    }
  }

  $("#btnTable").click(function () {
    table1 = new creaTable($("#nombreLigne").val(), $("#nombreColonne").val());
    table1.affichager(table1.tableCreation());
    tabFusion = [];
    if ($("#nombreLigne").val() != "" && $("#nombreColonne").val() != "") {
      $(".Enregistrer").css("display", "flex");
    }
  });

  $(document).on("click", "td,th", function () {
    // let colonne = "ligne";
    table1.SetLigne(this);
    // table1.getColonne(this);
  });
  $("#fusion").click(function () {
    let rowSpan = table1.getLigne().length;
    let colSpan = table1.getColonne().length;
    if (rowSpan >= colSpan) {
      let col = table1.getColonne()[0] + 1;
      // return le plus petit dans un tableau
      let lign = Math.min.apply(null, table1.getLigne()) + 1;
      // let lign = table1.getLigne();
      // alert(col);
      // alert(lign);
      table1.fusionLigne(
        rowSpan,
        lign,
        col,
        document.getElementById("tableau")
      );
    } else {
      let col = Math.min.apply(null, table1.getColonne()) + 1;
      let lign = table1.getLigne()[0] + 1;
      // alert(colSpan);
      // alert(lign);
      // alert(col);
      table1.fusionColonne(
        colSpan,
        lign,
        col,
        document.getElementById("tableau")
      );
    }
  });

  $(document).on("dblclick", ".tdTable", function () {
    contenuTd = $("input.thTable").val();
    $("input.thTable").parent().text(contenuTd);
    $("input.thTable").remove();
    contenuTd = $("input.tdTable").val();
    $("input.tdTable").parent().text(contenuTd);
    $("input.tdTable").remove();
    contenuTd = $(this).text();
    var contenu = $("<input class='tdTable' type='text'>").val(contenuTd);
    $(this).html(contenu);
    $("input.tdTable").select();
  });

  $(document).on("dblclick", ".thTable", function () {
    contenuTd = $("input.tdTable").val();
    $("input.tdTable").parent().text(contenuTd);
    $("input.tdTable").remove();
    contenuTd = $("input.thTable").val();
    $("input.thTable").parent().text(contenuTd);
    $("input.thTable").remove();
    contenuTd = $(this).html();
    var contenu = $("<input class='thTable' type='text'>").val(contenuTd);
    $(this).html(contenu);
    $("input.thTable").select();
  });
  $(document).on("click", "body", function () {
    contenuTd = $("input.tdTable").val();
    $("input.tdTable").parent().text(contenuTd);
    $("input.tdTable").remove();
    contenuTd = $("input.thTable").val();
    $("input.thTable").parent().text(contenuTd);
    $("input.thTable").remove();
  });

  // bouton
  $("#enregistre").click(function () {
    $("#save").css("display", "flex");
  });
  $(".btnChoix").click(function () {
    if ($(this).val() == 0) {
      $("#save").css("display", "none");
    } else if ($(this).val() == 1) {
      table1.enregistrement($("#nomTable").val());
    }
  });
  //   // //---------------------------------------------------
});
