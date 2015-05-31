$(function($){
  var View = {
    addRow : function ( attendantId , name ){

      // note : 行尾的 \ 是用來讓字串換行
      // note : 在 tr 加上 courseid 是要給 jquery 日後操作資料用的，在後面的例子會提到
      // note : div class="favorite" 預設是隱藏的，所以看不到
      var html = '<tr data-attendantId="'+ attendantId +'">\
                    <td>'+ name +'</td>\
                  </tr>' ;

      $("#table").append(html);
    }, //addRow end


  }

  window.View = View ;

});
