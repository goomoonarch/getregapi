export const consoleLogger = (function(window, document) {  
    var div = document.createElement("div");
    div.style.cssText = "position: absolute; " +
      "top: 5px; left: 5px; right: 5px; bottom: 5px; " +
      "padding: 10px; " +
      "overflow-y: auto; " + 
      "display: none; " + 
      "background: rgba(0, 32, 0, 0.9); " +
      "border: 3px solid #888; " + 
      "font: 14px Consolas,Monaco,Monospace; " +
      "color: #ddd; " + 
      "z-indez: 0";
  
    var ul = document.createElement("ul");
    ul.style.cssText = "padding: 0; list-style-type: none; margin: 0";
    div.appendChild(ul)
  
    document.body.appendChild(div);
  
    var toggleButton = document.createElement("button");
    toggleButton.innerText = "Console";
    toggleButton.style.cssText = "position: absolute; right: 10px; top: 10px; z-index: 501";
  
    toggleButton.addEventListener("click", function () {
      div.style.display = div.style.display === "none" ? "block" : "none";
    });
  
    document.body.appendChild(toggleButton);
    
    var clearButton = document.createElement("button");
    clearButton.innerText = "Clear";
    clearButton.style.cssText = "position: absolute; right: 10px; top: 30px; z-index: 501";
      
    clearButton.addEventListener("click", function() {
      ul.innerHTML = "";
    });
      
    div.appendChild(clearButton);
    
    function addMsg(msg) {
      var li = document.createElement("li");
      li.innerText = msg;
      ul.appendChild(li);
    }
  
    // Monkey-patch console object
  
    var methods = ["log", "debug", "error", "info", "warn"];
  
    for (var i = 0; i < methods.length; i++) {
      var method = methods[i];
      var original = window.console[method];
      window.console[method] = function(msg) {
        addMsg(msg);
        original.apply(window.console, arguments);
      };
    }
  
  })(window, document);