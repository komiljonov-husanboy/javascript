"use strict";


// var channel =prompt("whats your favourite youtuber");
// console.log(`https://youtube.com/${channel} videos`);



function youtubeChannel() {
    var videoName = document.getElementById("channelInput").value;
    var url = `https://youtube.com/results?search_query=${videoName}`;
    window.location.href = url;
}

alert(" Kattalar saytiga 18 ga kirmaganlar uchun taqiqlanadi !")

var a =prompt(" kattalar saytiga kirish uchun yoshingizni kiriting !")

if(a >18){
    console.log("%c kattalar saytiga kirish uchun ruhsat berildi ✅","color:green;font-size:20px;");
    
        document.write(`
        <div class="container inner">
        <h1> KATTALAR UCHUN<h1>

        <div class="kino">
            <h1>Kino</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/atlHhqujrW4?si=fHdYplauvmCNqBaS&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div></div>
        `);
    
}
else if(a < 18)
{
    console.log("%c Kattalar saytiga kirish uchun ruhsat berilmadi🔞 ","color:red;font-size:20px;");
    console.log("%c bolalar saytiga kirish uchun ruhsat berildi ✅","color:green;font-size:20px;");

    document.write(`
    <div class="container inner">
    <h1> BOLALAR UCHUN<h1>
        <div class="multifilm">
            <h1>Multifilm</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IbeIAksZO0g?si=TbCsH2iOJs9Z8qyc&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div></div>
    `);
}
else if(a =18){
    console.log("%c kattalar saytiga kirish uchun ruhsat berildi ✅","color:green;font-size:20px;");
    document.write(`
    <div class="container inner">
    <h1> KATTALAR UCHUN<h1>
    <h1>Kino</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/atlHhqujrW4?si=fHdYplauvmCNqBaS&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    <h1> BOLALAR UCHUN<h1>
    <div class="multifilm">
        <h1>Multifilm</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IbeIAksZO0g?si=TbCsH2iOJs9Z8qyc&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    `)
}


