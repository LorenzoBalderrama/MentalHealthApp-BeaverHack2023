<script>
    import Global from "./global.svelte";
    import Router from 'svelte-spa-router';

    let prompts = ['What made you happy today?', 'What setback in life has made you stronger?', 'What are you thankful for?', 
    'How can you be more kind to others?', 'What is your happy place?', 'What emotions did you feel today?', 
    'Name 3 positive things you experienced this week', 'What makes you laugh?'];
    let index = 0;

    function myFunction() {
    var number = Math.floor(Math.random() * 10);
    index = (index + 1)%(prompts.length);
    var Message = prompts[index];
    document.getElementById('output').innerHTML = "Prompt: " + Message;
    }
  </script>
  <style>
    div.output{
      font-size: 1.2em;
      padding: 3px;
    }
  </style>

<head>
    <title>Mental Health App</title>
</head>

  <header>Your mental health matters.</header>
  <div id="output" class="output"></div>
  <button class="lg" on:click={myFunction}>
    Generate Prompt
  </button>

  <div class="container2">
    <textarea id="write" name="write" rows="20" cols="50"
    placeholder=" Reflect on your thoughts, feelings, or day."></textarea>
</div>





<footer><p>Disclaimer: This website provides information for informational purposes only. This website does not provide any 
  medical or professional advice. This chatbot does not replace a healthcare professional or act as a substitute for 
  professional mental health, mental advice, diagnosis or treatment.</p>
  &copy; 2023 Audrey Flanders and Lorenzo Balderrama
</footer>
