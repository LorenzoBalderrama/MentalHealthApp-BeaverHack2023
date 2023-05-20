<script>
    import Global from "./global.svelte";
    import Router from 'svelte-spa-router';


  let index = 0;
  let circleInfo = [

    {
    radius: 40,
    fill: "red",
  },
  {
    radius: 47,
    fill: "orange",
  },

  {
    radius: 56,
    fill: "yellow",
  },
  {
    radius: 67,
    fill: "green",
  },
  {
    radius: 77,
    fill: "blue",
  },
  {
    radius: 65,
    fill: "green",
  },
  {
    radius: 56,
    fill: "yellow",
  },
  {
    radius: 47,
    fill: "orange",
  },
];

setInterval(() => {
  index = (index + 1)%(circleInfo.length)
  const newCircleProps = circleInfo[index];
  document.getElementById("circle").setAttribute("fill", newCircleProps.fill)
  document.getElementById("circle").setAttribute("r", newCircleProps.radius)
}, 1000)
  </script>


<style>

  circle {
  transition: all 1s ease;
  }
  section.circle{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin-top: 50px;
  }

  p.breath{
    width: auto;
    position: relative;
    font-size: 1.7em;
    position: fixed;
    top: 170px;
    width: 100%;
    left: 0%;

  }

</style>

<head>
    <title>Mental Health App</title>
</head>

  <header>Your mental health matters.</header>

  <p class="breath">Breath in as the circle gets bigger. Breath out as the circle gets smaller.</p>

<div>
<section class="circle">
<svg width="500px" height="500px" viewBox="0 0 200 200">
  <circle id="circle" fill="blue" cx="100" cy="100" r="100"></circle>
</svg>
</section>
</div>

<footer><p>Disclaimer: This website provides information for informational purposes only. This website does not provide any 
  medical or professional advice. This chatbot does not replace a healthcare professional or act as a substitute for 
  professional mental health, mental advice, diagnosis or treatment.</p>
  &copy; 2023 BeaverHacks IDK***
</footer>
