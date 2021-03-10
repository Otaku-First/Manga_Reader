 function selectPage() {
    var url = "pdf_files/Case.pdf";

    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

    var pdfDoc = null,
        pageNum = 1,
        pageRendering = 1,
        pageNumPending = null,
        scale = 1,
        canvas = document.getElementById('the-canvas'),
        ctx = canvas.getContext('2d');

    /**
     * Получаєм інфо про документ(к-сть сторінок, розмір по ширині і висоті).

     */
    function renderPage(num) {
        pageRendering = true;

        pdfDoc.getPage(num).then(function(page) {
            var viewport = page.getViewport({scale: scale});
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Рендеремо пдф
            var renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);


            renderTask.promise.then(function() {
                pageRendering = false;
                if (pageNumPending !== null) {

                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });

        // Оновлюємо кількість сторінок
        document.getElementById('page_num').textContent = num;
    }

    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            url = "pdf_files/Case.pdf";
            pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
                pdfDoc = pdfDoc_;

            })
            renderPage(num);}
    }

    /**
     * Навігація
     */
    function onPrevPage() {
        if (pageNum <= 1) {
            return;
        }
        pageNum--;

        document.getElementById("gotopage").value = pageNum;
        queueRenderPage(pageNum);
    }
    document.getElementById('prev').addEventListener('click', onPrevPage);

    document.getElementById('prev-page-mobile').addEventListener('click', onPrevPage );















    /**
     * Навігація
     */
   function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        pageNum++;

       function getStyle(b, a) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                return document.defaultView.getComputedStyle(b, "")[a]
            } else if (b.currentStyle) {
                return b.currentStyle[a]
            }
        };

        var red_block_size = getStyle(document.getElementById('the-canvas'),'width');

        var red_block_size2 = getStyle(document.getElementById('the-canvas'),'height');

        var div = '<div class="prof" style="width:'+red_block_size+';height:'+red_block_size2+';"><img  class="pre-img-loader" src="https://skygold.com.ua/image/loader.gif"></div>';
        $("#prof-add").append(div);
        setTimeout(function () {
            $('.prof').addClass('none');
        }, 1000)





        document.getElementById("gotopage").value = pageNum;
        queueRenderPage(pageNum);

    }

    function goNextPage() {
        var  inpValue = document.getElementById("gotopage").value;
        pageNum = parseInt(inpValue);
        queueRenderPage(pageNum);
    }


    document.getElementById('next').addEventListener('click', onNextPage );
    document.getElementById('kurwa').addEventListener('click', goNextPage );
   // document.getElementById('the-canvas').addEventListener('click', onNextPage );
    document.getElementById('next-page-mobile').addEventListener('click', onNextPage );

    /**
     * Asynchronously downloads PDF.
     */
    pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page_count').textContent = pdfDoc.numPages;

        var max_count_number = pdfDoc.numPages;

        document.getElementById("gotopage").setAttribute('max', ''+max_count_number+'');
        renderPage(pageNum);
    });


    function getStyle(b, a) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
            return document.defaultView.getComputedStyle(b, "")[a]
        } else if (b.currentStyle) {
            return b.currentStyle[a]
        }
    };

    var red_block_size = getStyle(document.getElementById('the-canvas'),'width');

    var red_block_size2 = getStyle(document.getElementById('the-canvas'),'height');

    var div = '<div class="prof" style="width:'+red_block_size+';height:955px;"><img class="pre-img-loader" src="https://skygold.com.ua/image/loader.gif"></div>';

    $("#prof-add").append(div);
    setTimeout(function () {
        $('.prof').addClass('none');
    }, 1000)
}


function pre_loader() {
    function getStyle(b, a) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
            return document.defaultView.getComputedStyle(b, "")[a]
        } else if (b.currentStyle) {
            return b.currentStyle[a]
        }
    };

    var red_block_size = getStyle(document.getElementById('the-canvas'),'width');

    var red_block_size2 = getStyle(document.getElementById('the-canvas'),'height');

    var div = '<div class="prof" style="width:'+red_block_size+';height:'+red_block_size2+';"><img class="pre-img-loader" src="https://skygold.com.ua/image/loader.gif"></div>';

    $("#prof-add").append(div);
    setTimeout(function () {
        $('.prof').addClass('none');
    }, 1000)
}
function zoomin() {
    var GFG = document.getElementById("the-canvas");
    var GFG2 = document.getElementsByClassName("prof");
    var currWidth = GFG.clientWidth;
    var currWidth2 = GFG2.clientWidth;
    GFG.style.width = (currWidth + 100) + "px";

    GFG2.style.width = (currWidth2 + 100) + "px";
}
function zoomout() {
    var GFG = document.getElementById("the-canvas");
    var GFG2 = document.getElementsByClassName("prof");

    var currWidth = GFG.clientWidth;

    var currWidth2 = GFG2.clientWidth;
    GFG.style.width = (currWidth - 100) + "px";

    GFG2.style.width = (currWidth2 - 100) + "px";
}
window.onload = selectPage();
