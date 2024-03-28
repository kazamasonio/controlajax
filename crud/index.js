$(document).ready(function () {
  class voiture {
    constructor() {
      this.modele = "";
      this.immatriculation = "";
      this.marque = "";
      this.vitesse = "";
      this.nationalite = "";
      this.prix = "";
      this.nombreDisponible = "";
      this.color = [];
      this.id = "";
      this.table();
    }

    enregistrement() {
      this.modele = $("#modele").val();
      this.immatriculation = $("#immatriculation").val();
      this.marque = $("#marque").val();
      this.vitesse = $("#vitesse").val();
      this.nationalite = $("#nationalite").val();
      this.prix = $("#prix").val();
      this.nombreDisponible = $("#nombreDisponible").val();
      voiture1.color = [];
      $('input[name="couleurDisponible[]"]:checked').each(function () {
        voiture1.color.push($(this).val());
      });
    }
    inserteData() {
      $.ajax({
        url: "page/voitureInserte.php",
        type: "post",
        data: {
          modele: this.modele,
          immatriculation: this.immatriculation,
          marque: this.marque,
          vitesse: this.vitesse,
          nationalite: this.nationalite,
          prix: this.prix,
          nombreDisponible: this.nombreDisponible,
          couleur: this.color,
        },
        success: function (retour) {
          alert(retour);

          alert("Enregistrement fait avec succes");
        },
        error: function () {
          alert("Erreur lors de l'envoi des données");
        },
      });
    }
    getData(id) {
      this.id = id;
      $("#formModification").css("display", "flex");
      $.ajax({
        url: "selection1.php",
        type: "post",
        dataType: "json", // Définir le type de données attendu
        data: {
          immatriculation: this.id,
        },
        success: function (e) {
          // Afficher les données retournées dans la console (pour vérification)
          console.log(e.color);
          let color = e.color.split(",");

          // Mettre à jour les champs du formulaire avec les données reçues
          voiture1.affichager(
            e.modele,
            e.immatriculation,
            e.marque,
            e.vitesse,
            e.nombreStock,
            e.prix,
            e.nationalite,
            color
          );
        },
        error: function () {
          alert("Erreur lors de l'envoi des données");
        },
      });
    }

    // suppression function
    suppression(id) {
      this.id = id;
      $.ajax({
        url: "suppression.php",
        type: "post",
        data: {
          immatriculation: this.id,
        },

        success: function (retour) {
          $("#notification").css("display", "none");
          voiture1.table();
        },
        error: function () {
          alert("Erreur lors de l'envoi des données");
        },
      });
    }

    // mise ajoure
    updateData() {
      voiture1.enregistrement();
      $.ajax({
        url: "modification.php",
        type: "post",
        data: {
          modele: this.modele,
          immatriculation: this.immatriculation,
          marque: this.marque,
          vitesse: this.vitesse,
          nationalite: this.nationalite,
          prix: this.prix,
          nombreDisponible: this.nombreDisponible,
          couleur: this.color,
        },
        success: function (retour) {
          console.log(retour);
          $("#formModification").css("display", "none");
          voiture1.table();
        },
        error: function () {
          alert("Erreur lors de l'envoi des données");
        },
      });
    }
    affichager(
      modele,
      immatriculation,
      marque,
      vitesse,
      nombreStock,
      prix,
      nationalite,
      color
    ) {
      $("#modele").val(modele);
      $("#immatriculation").val(immatriculation);
      $("#marque").val(marque);
      $("#vitesse").val(vitesse);
      $("#nationalite").val(nationalite);
      $("#nombreDisponible").val(nombreStock);
      $("#prix").val(prix);
      $('input[name="couleurDisponible[]"]').each(function () {
        var couleurAcheck = $(this).val();
        if (color.includes(couleurAcheck)) {
          $(this).prop("checked", true);
        } else {
          $(this).prop("checked", false);
        }
      });
      //   alert(this.immatriculation);
      //   alert(this.vitesse);
      //   alert(this.prix);
      //
    }

    // afficher le table
    table() {
      $.ajax({
        url: "table.php",
        type: "post",
        success: function (retour) {
          $("#contente").html(retour);
        },
      });
    }
  }
  var id;
  var voiture1 = new voiture();

  $("#Enregistrement").click(function () {
    voiture1.enregistrement();
    voiture1.inserteData();
  });

  // Suppression
  $(document).on("click", ".sup", function () {
    $("#notification").css("display", "block");
    id = $(this).data("id");
    // alert(id);
  });
  $(".reponse").click(function () {
    if ($(this).val() == 1) {
      voiture1.suppression(id);
      // voiture1.table();
      id = "";
    } else {
      $("#notification").css("display", "none");
      id = "";
    }
  });
  // ********************************************

  // Modification
  $(document).on("click", ".mod", function () {
    var id = $(this).data("id");
    alert(id);
    voiture1.getData(id);
  });
  $("#Modifer").click(function () {
    voiture1.updateData();
    alert("Le modification a ete bien effecuter!");
  });
  $("#annuler").click(function () {
    $("#formModification").css("display", "none");
  });
  // **************************************************
});
