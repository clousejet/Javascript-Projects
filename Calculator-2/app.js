let modeToggler = document.getElementById('mode-toggler');
modeToggler.addEventListener('click', (event)=>
{
    if(modeToggler.getAttribute('data-currentMode') == "light")
    {
      modeToggler.setAttribute('data-currentMode', 'dark');
      modeToggler.textContent = "Light Mode";
      document.getElementById('container').style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      document.getElementById('calculator').style.background = "#333333";
      document.getElementById('output').style.color = "#fff";
      let buttons = document.getElementById('keyboard').querySelectorAll('.number');
      for(button of buttons)
      {
        button.style.background = "#333333";
        button.style.color = "#fff";
        button.classList.add('hover');
      }
      let actionBtns = document.getElementById('keyboard').querySelectorAll('.action');
      for(actionBtn of actionBtns)
      {
        actionBtn.style.background = "#333333";
        actionBtn.style.color = "#fff";
      }
      let emptyBtns = document.getElementById('keyboard').querySelectorAll('.empty');
      for(emptyBtn of emptyBtns)
      {
        emptyBtn.style.background = "#333333";
      }
    }
    else
    {
      modeToggler.setAttribute('data-currentMode', 'light');
      modeToggler.textContent = "Dark Mode";
      document.getElementById('container').style.boxShadow = "none";
      document.getElementById('calculator').style.background = "#eaedef";
      document.getElementById('output').style.color = "black";
      let buttons = document.getElementById('keyboard').querySelectorAll('.number');
      for(button of buttons)
      {
        button.style.background = "#eaedef";
        button.style.color = "#000";
        button.classList.remove('hover');
      }
      let actionBtns = document.getElementById('keyboard').querySelectorAll('.action');
      for(actionBtn of actionBtns)
      {
        actionBtn.style.background = "#eaedef";
        actionBtn.style.color = "#000";
      }
      let emptyBtns = document.getElementById('keyboard').querySelectorAll('.empty');
      for(emptyBtn of emptyBtns)
      {
        emptyBtn.style.background = "#eaedef";
      }
    }
});

function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText =
      getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}