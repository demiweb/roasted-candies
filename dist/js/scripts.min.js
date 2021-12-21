function helloConsole() {
    const staticText = 'Made with ❤️ by Demiweb';
    const staticUrl = '> https://demiweb.pro/';
    const hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let title = '%c';

        for (let i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        const title = 'demiweb';
        const banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        const styler = [];

        const symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}


helloConsole();
let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


window.onscroll = function () {
    scrollFunction();

};

function checkScrollDir() {
    newValue = window.pageYOffset;
    // console.log(window.pageYOffset + ' pageoffset')
    if (window.innerWidth > 1050) {document.documentElement.scrollTop
        // console.log( + 'scrolled from top');
        if (document.body.querySelector('.header')) {
            if (document.body.classList.contains('home')) {
                let heightCat = document.querySelector('.header-bottom .header-catalog__nav').offsetHeight;
                if (newValue > heightCat) {
                    document.querySelector('.header').classList.add('is-fixed');

                } else {
                    document.querySelector('.header').classList.remove('is-fixed');

                }
            } else {
                if (oldValue > newValue) {
                    // console.log('scroll top?')
                    document.querySelector('.header').classList.remove('is-fixed');
                    if (window.pageYOffset >= 20) {
                        document.querySelector('.header').classList.add('is-fixed');
                    }
                }
                else {
                    document.querySelector('.header').classList.add('is-fixed');

                }
            }
        }



    } else {
        if (oldValue < newValue) {

        } else if (oldValue > newValue) {

        }
    }

    oldValue = newValue;
}

let oldValue = 0;
let newValue = 0;

function scrollFunction() {
    checkScrollDir()
    // if (window.innerWidth < 1201) {
    //     console.log($('.header').outerHeight(true) + ' header-height')
    //     if (document.body.scrollTop > $('.header').outerHeight(true) || document.documentElement.scrollTop > $('.header').outerHeight(true)) {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.add('scrolled');
    //         }
    //     } else {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.remove('scrolled');
    //             // document.body.querySelector(".header").classList.remove('scroll-down');
    //         }
    //
    //     }
    // } else {
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.add('scrolled');
    //         }
    //     } else {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.remove('scrolled');
    //             document.body.querySelector(".header").classList.remove('scroll-down');
    //         }
    //
    //     }
    // }


}

document.onload = () => {
    scrollFunction();
};
scrollFunction();

let catalogMen = [...document.querySelectorAll('.header-catalog')];

function hoverableMenu() {
    if (!catalogMen.length) {

    } else {
        catalogMen.forEach((btn) => {
            if (window.innerWidth > 1050) {
                btn.addEventListener('mouseover', () => {
                    document.querySelector('.backplate-menu').classList.add('visible');

                })
                btn.addEventListener('mouseout', () => {
                    document.querySelector('.backplate-menu').classList.remove('visible');

                })
            } else {

            }

        })
    }
}

hoverableMenu();


let burger = [...document.querySelectorAll('.header-burger')];

function openMobileMenu() {
    if (burger.length) {
        burger.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
                document.querySelector('.header-mob').classList.toggle('opened');
                document.body.classList.toggle('lock')
            })
        })
    }
}
openMobileMenu();

let btnCatalog = [...document.querySelectorAll('.header-catalog__btn')];
let btnCatalogMenu = [...document.querySelectorAll('.header-catalog__nav .menu-item-has-children > a')];

function openBtnCatalog() {
    if (!btnCatalog.length) {

    } else {
        btnCatalog.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.header-catalog').classList.toggle('active');
                if (window.innerWidth > 1050) {

                } else {
                    document.querySelector('.backplate-menu').classList.toggle('visible');
                }

            })
        });
        document.body.addEventListener('click', (e) => {
            if (!e.target.closest('.header-catalog')) {
                document.querySelector('.header-catalog').classList.remove('active');
                document.querySelector('.backplate-menu').classList.remove('visible');
            }
        })
        btnCatalogMenu.forEach((btn2, k) => {
            btn2.addEventListener('click', (e) => {

                if (window.innerWidth > 1050) {

                } else {
                    e.preventDefault();
                    if (btn2.closest('li.menu-item-has-children').classList.contains('active')) {

                        btn2.closest('li.menu-item-has-children').classList.remove('active');

                    } else {
                        btnCatalogMenu.forEach((btn3) => {
                            btn3.closest('li.menu-item-has-children').classList.remove('active');
                        })
                        btn2.closest('li.menu-item-has-children').classList.add('active');
                        let parent = btn2.closest('li.menu-item-has-children');
                        console.log(parent.parentNode.closest('li.menu-item-has-children'));
                        if (!parent.parentNode.closest('li.menu-item-has-children')) {

                        } else {
                            parent.parentNode.closest('li.menu-item-has-children').classList.add('active');

                        }

                    }
                }


            })
        })
    }
}


openBtnCatalog();


//sliders


let homeSld = [...document.querySelectorAll('.js-slider.home-banner')];

function homeSlider() {
    if (!homeSld.length) {

    } else {
        homeSld.forEach((sld) => {
            let sldCont = sld.querySelector('.home-slider');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');
            let pagin = sld.querySelector('.dots');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },


            });
        })
    }
}

homeSlider();


let rowSlider = [...document.querySelectorAll('.js-slider.cards-row')];

function rowSlides() {
    if (!rowSlider.length) {

    } else {
        rowSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.cards-row__content');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');
            let pagin = sld.querySelector('.dots');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 8,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    600: {

                        slidesPerView: 3,
                        slidesPerGroup: 1,


                    },

                    1023: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                        spaceBetween: 20,
                    },
                    1100: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                    }
                }


            });
        })
    }
}

rowSlides();

let relSlider = [...document.querySelectorAll('.js-slider.cards-rel')];

function relSlides() {
    if (!relSlider.length) {

    } else {
        relSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.cards-rel__content');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');
            let pagin = sld.querySelector('.dots');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 30,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                autoplay: {
                    delay: 5000,
                    pauseOnMouseEnter: true,
                },


            });
        })
    }
}

relSlides();


//product slider

let cardPhotosBlock1 = [...document.querySelectorAll('.product-prev.js-slider')];

function startPhotosSlider2() {
    if (!cardPhotosBlock1.length) {

    } else {
        cardPhotosBlock1.forEach((blc) => {
            let mainSlides = blc.querySelector('.product-slider__main');
            let thumbsSlides = blc.querySelector('.product-slider__thumbs');
            let pagin = blc.querySelector('.dots');
            var swiperThumb = new Swiper(thumbsSlides, {
                spaceBetween: 10,
                slidesPerView: 5,
                freeMode: false,
                watchSlidesProgress: true,
                direction: 'horizontal',
                centeredSlides: false,
                loop: false,
                draggable: true,
                breakpoints: {

                }
            });
            var swiper2 = new Swiper(mainSlides, {
                spaceBetween: 10,
                slidesPerView: 1,
                loop: true,
                thumbs: {
                    swiper: swiperThumb,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
            });
        })
    }
}

startPhotosSlider2();

//product slider

//added cart slider

let addedSlides = [...document.querySelectorAll('.added-slider')];

function addedCartSlider() {
    if (!addedSlides.length) {

    } else {
        addedSlides.forEach((sld) => {
            let sldCont = sld.querySelector('.added-related');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                autoplay: {
                    delay: 3800,
                    pauseOnMouseEnter: true,
                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px

                    600: {
                        spaceBetween: 0,
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    }
                }


            });
        })
    }
}

addedCartSlider();

//added cart slider


//sliders

$('.rating-stars').raty(
    {
        readOnly: true,
        starHalf: './img/star-clear.svg',
        starOn: './img/star.svg',
        starOff: './img/star-clear.svg',
        hints: ['a', null, '', null, '', null]
    }
);

let singleCard = [...document.querySelectorAll('.single-card')];

function preventSingleCard() {
    if (singleCard.length) {
        let timeoutHandle = setTimeout(() => {
        }, 5000);
        singleCard.forEach((btn) => {


            let fav = btn.querySelector('.fav');
            let cart = btn.querySelector('.add-cart');
            fav.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                fav.classList.toggle('active');
            })
            cart.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                cart.classList.toggle('active');
                if (document.querySelector('.modal-added')) {
                    document.querySelector('.modal-added').classList.add('active');
                    if (document.querySelector('.modal-added').classList.contains('active')) {
                        clearTimeout(timeoutHandle);
                        timeoutHandle = setTimeout(() => {
                            document.querySelector('.modal-added').classList.remove('active');
                        }, 5000);
                    } else {
                        timeoutHandle = setTimeout(() => {
                            document.querySelector('.modal-added').classList.remove('active');
                        }, 5000);
                    }

                }

            })
        })
    }
}

preventSingleCard();

$('input.phone-number').each(function () {

    $(this).addClass('mask-phone-ua');

});
$(".mask-phone-ua").mask('+38(999)999-99-99');


let hiddenCarr = [...document.querySelectorAll('.show-hidden')];

function openHideText() {
    if (hiddenCarr.length) {
        hiddenCarr.forEach((btn) => {
            let hidden = btn.dataset.hidden;
            let show = btn.dataset.show;
            btn.addEventListener('click', () => {
                if (btn.closest('.text').classList.contains('visible')) {
                    btn.closest('.text').classList.remove('visible');
                    btn.innerHTML = hidden;
                } else {
                    btn.closest('.text').classList.add('visible');
                    btn.innerHTML = show;
                }
            })
        })
    }
}
openHideText();


let carrMod = [...document.querySelectorAll('.mod--carr')];

function openCarrMod() {
    if (carrMod.length) {
        carrMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--carr').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openCarrMod();

let coopMod = [...document.querySelectorAll('.mod--coop')];

function openCoopMod() {
    if (coopMod.length) {
        coopMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--coop').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openCoopMod();


let questMod = [...document.querySelectorAll('.mod--quest')];

function openQuestMod() {
    if (questMod.length) {
        questMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--quest').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openQuestMod();

let cartWin = [...document.querySelectorAll('.header-cart a')];

function openCart() {
    if (cartWin.length) {
        cartWin.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--cart').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openCart();

let clickMod = [...document.querySelectorAll('.one-click')];

function openClickMod() {
    if (clickMod.length) {
        clickMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--click').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openClickMod();

let revMod = [...document.querySelectorAll('.mod-comm')];

function openRevMod() {
    if (revMod.length) {
        revMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--comment').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openRevMod();

let modalWindow = [...document.querySelectorAll('.modal-window')];

function controlModal() {
    if (modalWindow.length) {
        modalWindow.forEach((mdl) => {
            let back = mdl.querySelector('.modal-backplate');
            let close = mdl.querySelector('.close-modal');

            back.addEventListener('click', () => {
                mdl.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
            close.addEventListener('click', () => {
                mdl.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        })
    }
}
controlModal();


let hiddenAbout = [...document.querySelectorAll('.unhide-text')];

function openHideTextAbout() {
    if (hiddenAbout.length) {
        hiddenAbout.forEach((btn) => {
            let hidden = btn.dataset.hidden;
            let show = btn.dataset.show;
            btn.addEventListener('click', () => {
                if (btn.closest('.product-info__about').classList.contains('visible')) {
                    btn.closest('.product-info__about').classList.remove('visible');
                    btn.innerHTML = show;
                } else {
                    btn.closest('.product-info__about').classList.add('visible');
                    btn.innerHTML = hidden;
                }
            })
        })
    }
}
openHideTextAbout();

$(document).on('click', '.js-minus', function (e) {
    var t=$(this).next().find('input').val();t>1&&$(this).next().find('input').val(+t-1);
    return false;
});
$(document).on('click', '.js-plus', function (e) {

    var t=$(this).prev().find('input').val();
    $(this).prev().find('input').val(+t+1);
    return false;
});


let prodCart = [...document.querySelectorAll('.product-info__footer')];

function prodCartAdd() {
    if (prodCart.length) {
        prodCart.forEach((btn) => {
            let cart = btn.querySelector('.add-cart');

            cart.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                cart.classList.toggle('active');
            })
        })
    }
}

prodCartAdd();


let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

let passInput = [...document.querySelectorAll('.input-cont.password')];

function openPassword() {
    if (passInput.length) {
        passInput.forEach((inp) => {
            let icon = inp.querySelector('.icon');
            icon.addEventListener('click', () => {
                if (inp.classList.contains('visible')) {
                    inp.classList.remove('visible');
                    inp.querySelector('input').type = 'password';

                } else {
                    inp.classList.add('visible');
                    inp.querySelector('input').type = 'text';
                }

            })
        })
    }
}
openPassword();


let redactInput = [...document.querySelectorAll('.input-cont .redact')];

function openRedact() {
    if (redactInput.length) {
        redactInput.forEach((icon) => {
            icon.addEventListener('click', () => {
                icon.closest('.input-cont').querySelector('input').disabled = false;

            })
        })
    }
}
openRedact();

let cabinetBtn = [...document.querySelectorAll('.cabinet-open')];

function openCabinet() {
        if (cabinetBtn.length) {
            cabinetBtn.forEach((btn) => {
                btn.addEventListener('click', () => {
                    btn.closest('.cabinet-nav').classList.toggle('visible');
                })
            })
        }
}
openCabinet();


let orderDetail = [...document.querySelectorAll('.orders-item__line .item-show')];

function openOrderDet() {
    if (orderDetail.length) {
        orderDetail.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.orders-item').classList.toggle('open');
            })
        })
    }
}
openOrderDet();

let revDetail = [...document.querySelectorAll('.review-line__head .item-show')];

function openRevDet() {
    if (revDetail.length) {
        revDetail.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.review-line').classList.toggle('open');
            })
        })
    }
}
openRevDet();

let faqSingle = [...document.querySelectorAll('.single-faq .head')];

function openFaq() {
        if (faqSingle.length) {
            faqSingle.forEach((btn) => {
                btn.addEventListener('click', () => {
                    btn.closest('.single-faq').classList.toggle('open');
                })
            })
        }
}
openFaq();

let startsRateModal = [...document.querySelectorAll('.rating-item .images .img')];

function hoverStarsRate() {
    if (!startsRateModal.length) {

    } else {
        startsRateModal.forEach((st, k) => {
            let number = k + 1;
            st.addEventListener('mouseover', () => {
                st.classList.add('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('hover');
                }
            });
            st.addEventListener('mouseout', () => {
                st.classList.remove('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.remove('hover');
                }
            });
            st.addEventListener('click', () => {
                startsRateModal.forEach((st2) => {
                    st2.classList.remove('clicked');
                });
                st.classList.add('clicked');
                st.closest('.rating-item').querySelector('span strong').innerHTML = number;
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('clicked');
                }
            })
        })
    }
}

hoverStarsRate();


let showRev = [...document.querySelectorAll('.show-rev')];

function showRevAll() {
    if (showRev.length) {
        showRev.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.prod-reviews__content').querySelector('.prod-reviews__list').classList.toggle('showed')
            })
        })
    }
}

showRevAll();

let btnGoRevs = [...document.querySelectorAll('.product-info__tags .rate p')];
function goToRevs() {
    if (btnGoRevs.length) {
        btnGoRevs.forEach((btn) => {
            $(btn).click(function() {
                $('.tab-btn--revs').click();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".tab-btn--revs").offset().top
                }, 500);
            });
        })
    }
}
goToRevs();
