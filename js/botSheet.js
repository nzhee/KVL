document.addEventListener("DOMContentLoaded", function () {
    // 바텀 시트 1
    document.getElementById('openBottomSheetButton1').addEventListener('click', function() {
        document.getElementById('bottomSheet1').style.bottom = '0';
    });
  
    document.getElementById('closeButton1').addEventListener('click', function() {
        document.getElementById('bottomSheet1').style.bottom = '-100%';
    });
  
    const itemList1 = document.querySelectorAll('#itemList1 li');
    const selectedItem1 = document.getElementById('selectedItem1');
    const openBottomSheetButton1 = document.getElementById('openBottomSheetButton1');
  
    itemList1.forEach(function(item) {
        item.addEventListener('click', function() {
            //selectedItem1.innerHTML = 'Selected Item: ' + item.innerHTML;
            itemList1.forEach(function(item) {
                item.classList.remove('selected');
            });
            item.classList.add('selected');
            openBottomSheetButton1.innerHTML = item.innerHTML;
            document.getElementById('bottomSheet1').style.bottom = '-100%';
        });
    });
  
    // 바텀 시트 2
    document.getElementById('openBottomSheetButton2').addEventListener('click', function() {
        document.getElementById('bottomSheet2').style.bottom = '0';
    });
  
    document.getElementById('closeButton2').addEventListener('click', function() {
        document.getElementById('bottomSheet2').style.bottom = '-100%';
    });
  
    const itemList2 = document.querySelectorAll('#itemList2 li');
    const selectedItem2 = document.getElementById('selectedItem2');
    const openBottomSheetButton2 = document.getElementById('openBottomSheetButton2');
  
    itemList2.forEach(function(item) {
        item.addEventListener('click', function() {
            //selectedItem2.innerHTML = 'Selected Item: ' + item.id;
            itemList2.forEach(function(item) {
                item.classList.remove('selected');
            });
            item.classList.add('selected');
            openBottomSheetButton2.innerHTML = item.innerHTML;
            document.getElementById('bottomSheet2').style.bottom = '-100%';
        });
    });
  });