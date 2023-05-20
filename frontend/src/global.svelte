<style>

    :root{
        --light:#bdebc4;
        --dark:#5a705d;
        --contrast:#3498db;
        --contrast2:#4a3208;
      }
    
      :global(body){
        background-color: var(--light);
        height: 100%;
        width: 100%;
      }
    
      :global(p) {
        font-size: 1.15em
      }
      
      :global(.main){
        text-align:center;
        margin: 2% 0 0 0;
        padding:0;
        align-items: center;
        text-align: center;
        position: fixed;
        top: 100px;
        width: 100%;
        left: 0%;
      }
      
      :global(.main a) {
        background-color:var(--dark);
        border-radius:6px 6px 1px 1px; 
        color:whitesmoke;
        font-size:1.3em;
        font-weight:bold;
        margin:0;
        padding: 9px 15px;
        text-decoration:none;
      }
      :global(.main a:hover) {
        background-color:whitesmoke;
        color:var(--dark);
      }
      
      :global(.container) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        :global(.beaver-image) {
          width: 350px;
          height: 350px;
          align-items: center;
        }
        
        :global(.intro) {
          font-size: 24px;
          margin-top: 20px;
        }
        
      
      :global(footer) {
          background: var(--dark);
          color:whitesmoke;
          padding: 15px;
          position: fixed;
          left: 0px;
          bottom:0px;
          width: 99%;
          text-align: left;
      
      }
      
      :global(header){
        font-size: 2em;
        position: fixed;
        top: 40px;
        width: 100%;
        left: 0%;
      }
    
      :global(.container2 h2){
        color: black;
        text-align: center;
        padding: 10px;
        margin: 5px;
        font-size: 1.8em;
      }
      
      
      :global(.container2){
        text-align:center;
        margin: auto;
        width: 900px;
        margin-top: 2%;
      }
      
      :global(details){
        background-color: var(--contrast2);
        color: whitesmoke;
        font-size: 1.5rem;
        margin: 5px;
      }
      
      :global(summary) {
        padding: 1%;
        list-style: none;
        display: flex;
        justify-content: space-between;  
        transition: height 1s ease;
      
      }
      
      :global(summary::-webkit-details-marker) {
        display: none;
      }
      
      :global(summary:after){
        content: "\002B";
      }
      
      :global(details[open] summary:after){
        content: "\00D7";
      }
      :global(details[open] div){
        padding: 1%;
        text-align: left;
        font-size: 1em;
        background-color: var(--dark);
      }
        
      :global(textarea){
        font-size:1.2em;
        padding:5px;
      
      }
    
    </style>