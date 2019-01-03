function getData(url,data){
    var data;
    $.ajax({
        type: 'GET',
        async:false,
        url:url,
        data:data,
        success:function(res){
            data = res;
        }
    })
    return data;
}

function getHeight() {
    var height = $(document).height();
    window.parent.document.getElementById('container').height = height + 70;
    return height;
}