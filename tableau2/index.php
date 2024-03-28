<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Table</title>
    <link rel="stylesheet" href="style.css" />
    <script src="js/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <h1>Creation d'un Tableau</h1>
    <form id="saisi" action="">
      <div id="ligne">
        <label>Ligne:</label>
        <input type="number" id="nombreLigne" placeholder="Ligne" min="1" />
      </div>
      <div id="colonne">
        <label for="">Colonne:</label>
        <input type="number" id="nombreColonne" placeholder="Colonne" min="1" />
      </div>
      <div class="btn">
        <button type="button" id="btnTable">Creer</button>
        <button type="button" id="fusion">fusion</button>
      </div>
    </form>
    <div id="conteneur"></div>
    <div class="btn Enregistrer">
      <button type="button" id="enregistre">Enregistrer</button>
    </div>
    <?php include('./page/notification.html');?>
    <script src="index.js"></script>
  </body>
</html>
