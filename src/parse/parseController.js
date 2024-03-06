const parsedUrlPre = document.getElementById('parsedUrl');

export function showData(data){
    parsedUrlPre.textContent = JSON.stringify(data, null, 2);
}

export function hideData(){
    parsedUrlPre.textContent = null;
}