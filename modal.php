<div class="modal">
  <div class="modal-dialog">
        <svg class="icon-close">
          <use href="sprite/close.svg#close"></use>
        </svg>
        <img class="modal-img" src="img/devochka.png" alt="devochka katitsya na samokate"/>
        <h2 class="modal-title">Запишитесь на тест-драйв электросамоката</h2>
        <p class="modtext1">и подберите модель для себя</p>
        <p class="modtext2">Менеджер свяжется с вами в течение 5 минут, чтобы согласовать время.</p>
        <p class="modtext3">Как с вами удобнее связаться?</p>
        <form action="handler.php" method="POST">
            <div class="input-group modal-group">
                <input id="userphone" 
                    type="tel"
                    class="input phone-mask" 
                    
                    maxlength="25"
                    name="userphone"
                    placeholder="+7 (___) __ - __ - __ "
                    required>
                <label for="tel-name"></label>
                <button type="submit" class="button-cta button-modal" data-target="#feedback-modal">
                    <p class="button-text modal-button-text">Оформить предзаказ</p>
                </button>
            </div>
            <div class="checkbox-wrapper">
                <label class="checkbox style-b">
                    <input type="checkbox"
                        name="user"
                        required>
                    <div class="checkbox__checkmark"></div>
                    <div class="checkbox__body"></div>
                </label> 
                <p class="alert-text modal-text-alert">
                    Нажимая на кнопку, вы соглашаетесь<br> на обработку  персональных данных<br> и политикой конфиденциальности
                </p>
            </div>
        </form>
    </div>
</div>

    <script src="swiper-bundle.min.js"></script>

    <script src="just-validate.production.min.js"></script>
    <script src="main.js"></script>
</body>

</html>