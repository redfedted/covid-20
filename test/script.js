function hello() {
  var country = document.getElementById("srch").value;
  console.log(country);
  $.getJSON(
    `https://coronavirus-19-api.herokuapp.com/countries/${country}`,
    function(data) {
      console.log(data);
      $(".output").append(country);

      var cases = data.cases;
      var active = data.active;
      var critical = data.critical;
      var deaths = data.deaths;
      var recovered = data.recovered;
      var todaycases = data.todayCases;
      var todadeaths = data.todayDeaths;
      
      $(".cases").empty();
      $(".active").empty();
      $(".critical").empty();
      $(".deaths").empty();
      $(".recovered").empty();
      $(".todaycases").empty();
      $(".todaydeaths").empty();
      $(".country").empty();

      $(".country").append(data.country);
      $(".cases").append(cases);
      $(".active").append(active);
      $(".critical").append(critical);
      $(".deaths").append(deaths);
      $(".recovered").append(recovered);
      $(".todaycases").append(todaycases);
      $(".todaydeaths").append(todadeaths);
      
    }
  );
}
