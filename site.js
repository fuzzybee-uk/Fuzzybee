// Expand the full services list when a service tile is selected.
function revealServices(){if(location.hash === '#all-services'){const list=document.getElementById('all-services');if(list) list.open=true;}}
window.addEventListener('hashchange',revealServices);
revealServices();
document.querySelectorAll('a[href="#all-services"]').forEach(link=>link.addEventListener('click',()=>{const list=document.getElementById('all-services');if(list) list.open=true;}));
// Keep old links to the original single-page wreath collection working.
if(location.hash === '#wreaths' && !document.getElementById('wreaths')) location.replace('wreaths.html');
