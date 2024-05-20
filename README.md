# Email-Authentication-Check

Install EmailJS SDK using npm
$ npm install --save @emailjs/browser

Install the SDK via Yarn
$ yarn add @emailjs/browser

Browser script
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY",
      });
   })();
</script>
