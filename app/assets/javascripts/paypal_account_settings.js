window.ST = window.ST || {};

(function(module) {

  module.initializePayPalAccountForm = function(formId) {
    var form = $('#'+formId);
    form.validate({
      submitHandler: function(form) {
        var $form = $(form);
        var $sendButton = $form.find(".send_button");
        if(!$sendButton.hasClass("send-button-loading")) {
          var $spinner = $('<img src="https://s3.amazonaws.com/sharetribe/assets/ajax-loader-grey.gif" class="send-button-loading-img" />');
          $sendButton.addClass("send-button-loading").blur();
          $form.find(".send-button-wrapper").append($spinner);
          form.submit();
        }
      }
    });
  };

})(window.ST);