# Statusbox

# Implementation
To implement statusbox, you just need to paste this snippet at the end of your HTML-Body:  
```
<script src="https://cdn.jsdelivr.net/gh/cuzimbisonratte/status_box@v1.0.0/statusbox.js"></script>
```  
And you need to put this somewhere in your body:   
```
<div class="status_container status"></div>
```

# Styling
To put the box somewhere fixed on your page, we recommend the right side of your page.  
You can easily put your box there with this css-snippet: 
```
.status_container {
    position: fixed;
    right: 1rem;
    bottom: 2rem;
}
```
To style the text, just give the `.status_container`-class a font.
> Note: If you wanna style it yourself, you need to know that the bottom of the box is 1REM lower than set in the css!  