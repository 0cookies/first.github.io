window.onload = function() {
    // document.addEventListener('DOMContentLoaded', function() {
    // 最上面导航栏的悬停效果
    var topnav = document.querySelector('.t_head_content');
    var mask = document.querySelector('.mask');
    var maskdetail = document.querySelector('.mask_detail');
    topnav.addEventListener('mouseover', function() {
        maskdetail.style.display = 'block';
        mask.style.display = 'block';
    })
    topnav.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        maskdetail.style.display = 'none';
    })
    maskdetail.addEventListener('mouseover', function() {
        maskdetail.style.display = 'block';
        mask.style.display = 'block';
    })
    maskdetail.addEventListener('mouseout', function() {;
        maskdetail.style.display = 'none';
        mask.style.display = 'none';
    })

    var erweibox = document.querySelector('.erwei');
    var erweima = document.querySelector('.erweima');
    erweibox.addEventListener('mouseover', function() {
        erweima.style.display = 'block';
    })
    erweibox.addEventListener('mouseout', function() {

        erweima.style.display = 'none';
    })
    erweima.addEventListener('mouseover', function() {
        erweima.style.display = 'block';
    })
    erweima.addEventListener('mouseout', function() {
        erweima.style.display = 'none';
    })

    var login = document.querySelector('.t_head_login_r');
    var logincontent = document.querySelector('.login_info');
    login.addEventListener('mouseover', function() {
        logincontent.style.display = 'block';
    })
    login.addEventListener('mouseout', function() {

        logincontent.style.display = 'none';
    })
    logincontent.addEventListener('mouseover', function() {
        logincontent.style.display = 'block';
    })
    logincontent.addEventListener('mouseout', function() {
        logincontent.style.display = 'none';
    })

    var infotitle = document.querySelector('.info_title');
    var headtitle = infotitle.querySelectorAll('li');
    var infointroduce = document.querySelector('.info_introduce');
    var introduce = infointroduce.querySelectorAll('ul');

    for (var i = 0; i < headtitle.length; i++) {

        headtitle[i].addEventListener('mouseenter', function() {

            var index = this.getAttribute('index');

            for (var i = 0; i < headtitle.length; i++) {
                introduce[i].className = 'hidden';
            }
            introduce[index].className = 'show';
            console.log(introduce[index]);
        })
    }

    var actnav = document.querySelector('.act_nav');
    var acttitle = actnav.querySelectorAll('li');
    console.log(acttitle);
    var actcontent = document.querySelector('.act_content');
    var actchange = actcontent.querySelectorAll('ul');
    console.log(actchange);

    for (var i = 0; i < acttitle.length; i++) {

        acttitle[i].addEventListener('mouseenter', function() {

            var index = this.getAttribute('index');
            // console.log(index);
            for (var i = 0; i < acttitle.length; i++) {
                actchange[i].className = 'hidden';
            }
            actchange[index].className = 'show';
            // console.log(actchange[index]);
        })
    }


    var fixed = document.querySelector('.fixed');
    var fixul = fixed.querySelector('ul');
    var upd_free = document.querySelector('.upd_free');
    var updfreetopY = upd_free.offsetTop;
    var fiximg = fixul.querySelector('img');
    // var 
    // console.log(updfreetopY);
    var fixlis = fixul.querySelectorAll('li');
    var fixlia = fixul.querySelectorAll('a');
    console.log(fixlia);
    var fixlisi = fixul.querySelectorAll('span');
    // console.log(fixlisi);
    // console.log(fixlis[0].offsetTop);

    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 280) {
            // console.log('as');
            fixul.style.height = '410' + 'px';
            // fixlis[5].display='block';

        } else {
            fixul.style.height = '298' + 'px';
        }

    })
    fixlis[0].addEventListener('mouseenter', function() {
        fixlia[0].style.color = 'rgb(48, 156, 172)';
        fixlia[0].style.fontWeight = 600;
        animateY(fixlisi[0], -8);
        setTimeout(function() {
            animateY(fixlisi[0], 0);
        }, 200)
    })
    fixlis[0].addEventListener('mouseleave', function() {
        fixlia[0].style.color = 'rgb(146, 168, 171)';
        fixlia[0].style.fontWeight = 400;
    })
    fixlis[1].addEventListener('mouseenter', function() {
        fixlia[1].style.color = 'rgb(48, 156, 172)';
        fixlia[1].style.fontWeight = 600;
        animateY(fixlisi[1], -8);
        setTimeout(function() {
            animateY(fixlisi[1], 0);
        }, 200)
    })
    fixlis[1].addEventListener('mouseleave', function() {
        fixlia[1].style.color = 'rgb(146, 168, 171)';
        fixlia[1].style.fontWeight = 400;
    })
    fixlis[2].addEventListener('mouseenter', function() {
        fixlia[2].style.color = 'rgb(48, 156, 172)';
        fixlia[2].style.fontWeight = 600;
        animateY(fixlisi[2], -8);
        setTimeout(function() {
            animateY(fixlisi[2], 0);
        }, 200)
    })
    fixlis[2].addEventListener('mouseleave', function() {
        fixlia[2].style.color = 'rgb(146, 168, 171)';
        fixlia[2].style.fontWeight = 400;
    })
    fixlis[3].addEventListener('mouseenter', function() {
        fixlia[3].style.color = 'rgb(48, 156, 172)';
        fixlia[3].style.fontWeight = 600;
        animateY(fixlisi[3], -8);
        setTimeout(function() {
            animateY(fixlisi[3], 0);
        }, 200)
    })
    fixlis[0].addEventListener('mouseleave', function() {
        fixlia[3].style.color = 'rgb(146, 168, 171)';
        fixlia[3].style.fontWeight = 400;
    })
    fixlis[4].addEventListener('mouseenter', function() {
        fixlia[4].style.color = 'rgb(48, 156, 172)';
        fixlia[4].style.fontWeight = 600;
        animateY(fixlisi[4], -8);
        setTimeout(function() {
            animateY(fixlisi[4], 0);
        }, 200)
    })
    fixlis[4].addEventListener('mouseleave', function() {
        fixlia[4].style.color = 'rgb(146, 168, 171)';
        fixlia[4].style.fontWeight = 400;
    })
    fixlis[5].addEventListener('mouseenter', function() {
        fiximg.style.display = 'block'
        fixlia[5].style.color = 'rgb(48, 156, 172)';
        fixlia[5].style.fontWeight = 600;
        animateY(fixlisi[5], -8);
        setTimeout(function() {
            animateY(fixlisi[5], 0);
        }, 200)
    })
    fixlis[5].addEventListener('mouseleave', function() {
        fiximg.style.display = 'none';
        fixlia[5].style.color = 'rgb(146, 168, 171)';
        fixlia[5].style.fontWeight = 400;
    })


    // for (var i = 0; i < fixlis.length; i++) {
    //     fixlis[i].addEventListener('mouseenter', function() {
    //         animateY(fixlisi[0], -8);
    //         setTimeout(function() {
    //             animateY(fixlisi[0], 0);
    //         }, 200)
    //     })
    // }
}