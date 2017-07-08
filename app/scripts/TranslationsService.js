(function(){
  angular.module('combinationSum')
    .factory("TranslationsService", [TranslationsService]);

    function TranslationsService() {
      // TODO: Do it this way?
      // var translationsUrl = "/scripts/translations.json";
      // return $http.get(translationsUrl).then(
      //   function(response) { return console.log(response.data); },
      //   function(response) { alert(`missing ${translationsUrl}`); console.error(response); }
      // );

      return {
        "en-US": {
          "title": " - Combination Sum",
          "description" : "This calculator takes a set of numbers and returns all possible combinations to reach a given sum. A threshold can be specified and if no combinations adds up to the sum, the closest result is checked agaist the threshold -- Widely used in accounting, auditing, finance and data analysis.",
          "errorMessageNoCombination" : "NO COMBINATIONS",
          "thresholdMessage" : "- The closest combination is: ",
          "thresholdYes" : " - WITHIN the threshold",
          "thresholdNo" : " - NOT WITHIN the threshold",
          "errorMessageNoValues" : "PLEASE INSERT THE REQUIRED VALUES",
          "createdBy" : "Created By",
          "numbers" : "Numbers",
          "threshold" : "Threshold",
          "insertNumbers" : "Insert numbers separated by space or comma",
          "sum" : "Sum",
          "desiredSum" : "Insert the desired sum",
          "result" : "Result",
          "insertThreshold" : "Insert threshold",
          "findCombination" : "Find combinations"
        },
        "it-IT":{
          "title": " - Combinazioni per Somma",
          "description" : "Questo calcolatore prende un insieme di numeri e restituisce tutte le combinazioni possibili per raggiungerlo. È possibile specificare una soglia e se nessuna combinazione restituisce il numero, viene restituito il risultato più vicino e viene controllato contro soglia - ampiamente utilizzato in contabilità, revisione, finanza e analisi dei dati.",
          "errorMessageNoCombination" : "NESSUNA COMBINAZIONE",
          "thresholdMessage" : "- La combinazione più vicina è:",
          "thresholdYes" : "-  NALLA soglia",
          "thresholdNo" : " - FUORI DALLA soglia",
          "errorMessageNoValues" : "INSERIRE I VALORI RICHIESTI",
          "createdBy" : "Creato da",
          "numbers" : "Numeri",
          "threshold" : "Soglia",
          "insertNumbers" : "Inserire i numeri separati dallo spazio o dalla virgola",
          "sum" : "Somma",
          "desiredSum" : "Inserire la somma desiderata",
          "result" : "Risultato",
          "insertThreshold" : "Inserire la soglia",
          "findCombination" : "Trova le combinazioni"

        },
        "es-ES": {
          "title": " - Las Combinaciones de Suma Total",
          "description" : "Esta calculadora toma un conjunto de números y devuelve todas las combinaciones posibles para alcanzar una suma dada. Se puede especificar un umbral y si no hay combinaciones se suma a la suma, el resultado más cercano se verifica agaist el umbral - Ampliamente utilizado en contabilidad, auditoría, finanzas y análisis de datos.",
          "errorMessageNoCombination" : "NO COMBINACIONES",
          "thresholdMessage" : "- La combinación más cercana es:",
          "thresholdYes" : " - DENTRO del umbral",
          "thresholdNo" : " - NO EN EL umbral",
          "errorMessageNoValues" : "POR FAVOR INSERTAR LOS VALORES REQUERIDOS",
          "createdBy" : "Creado por",
          "numbers" : "Nùmeros",
          "threshold" : "Límite",
          "insertNumbers" : "Insertar números separados por espacio o coma",
          "sum" : "Suma",
          "desiredSum" : "Insertar la suma deseada",
          "result" : "Resultado",
          "insertThreshold" : "Umbral de inserción",
          "findCombination" : "Buscar combinación"

        },
        "de-DE":{
          "title": " - Kombinationen Zusatz",
          "description" : "Dieser Rechner nimmt einen Satz von Zahlen und gibt alle möglichen Kombinationen zurück, um eine gegebene Summe zu erreichen. Es kann ein Schwellenwert angegeben werden, und wenn keine Kombinationen der Summe addieren, wird das nächstgelegene Ergebnis auf den Schwellenwert überprüft - weit verbreitet in Buchhaltung, Auditierung, Finanzierung und Datenanalyse.",
          "errorMessageNoCombination" : "KEINE KOMBINATIONEN",
          "thresholdMessage" : "- Die nächste Kombination ist:",
          "thresholdYes" : " - INNERHALB der Schwelle",
          "thresholdNo" : " - NICHT INNERHALB der Schwelle",
          "errorMessageNoValues" : "BITTE EINSTELLEN DER ERFORDERLICHEN WERTE",
          "createdBy" : "Erstellt von",
          "numbers" : "Zahlen",
          "threshold" : "Schwelle",
          "insertNumbers" : "Zahlen, die durch Leerzeichen oder Komma getrennt sind",
          "sum" : "Zusatz",
          "desiredSum" : "Legen Sie den Wunsch sum",
          "result" : "Ergebnis",
          "insertThreshold" : "Schwellenwert einfügen",
          "findCombination" : "Kombination finden"

        }
      };
    }
}());
