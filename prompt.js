// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    var prompt = document.getElementById('floating-prompt');
  
    // Show the prompt
    function showPrompt() {
      prompt.style.display = 'block';
    }
  
    // Hide the prompt after 3 seconds
    function hidePrompt() {
      prompt.style.display = 'none';
    }
  
    // Check if the query parameter exists and is set to "true"
    var urlParams = new URLSearchParams(window.location.search);
    var showPromptParam = urlParams.get('showPrompt');
    if (showPromptParam === 'true') {
      showPrompt();
      setTimeout(hidePrompt, 4000);
    }
  });
  