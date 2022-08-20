setInterval(() => { document.getElementById("inner").innerHTML = new Date(); }, 1000);

        // setInterval(changeCol,4000);
        // function changeCol(){
        //     colors.forEach(setTimeout((col)=>{document.getElementById("inner").style.backgroundColor=col;},1000));
        // }
        // colors.forEach(change);


        //         var i = 0;
        // function change() {
        //   var doc = document.getElementById("background");
        //   var color = ["black", "blue", "brown", "green"];
        //   doc.style.backgroundColor = color[i];
        //   i = (i + 1) % color.length;
        // }
        // setInterval(change, 1000);

        let i = 0;
        let colors = ["red", "blue", "rgb(242,0,218)", "rgb(161,111,218)"];
        function changeCol() {
            document.getElementById("outer").style.backgroundColor = colors[i];
            i++;
            i %= colors.length;
        }
        setInterval(changeCol, 1000);