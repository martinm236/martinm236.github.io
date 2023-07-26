window.onload = function() {
   document.body.innerHTML += '<form action="/prihlasit/?ret=%2f" method="post" id="prihlaseni">
                     <h3>Přihlášení</h3>
  		           <label class="login-jmeno">Jméno: <input id="login" type="text" name="login"></label><br class="h">
  		           <label class="login-heslo">Heslo: <input id="heslo" type="password" name="heslo"></label>
  		           <input type="hidden" name="typ" value="login_alik">
                     <label class="login-trvale"><input id="pamatovat" type="checkbox" name="pamatovat" checked=""> Trvalé přihlášení (tento počítač je můj)</label>
  		           <button class="tlacitko" type="submit"><span>Přihlásit</span></button>
                   <script>element(element("login").value ? "heslo" : "login").focus()</script>
                 </form>';
};


