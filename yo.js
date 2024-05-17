async function fetchData(){
    try{
        const response = await fetch("https://coding-week-2024-api.onrender.com/api/data");

        const jsonResponse= await response.json();
        console.log(jsonResponse);


const dateElements = document.querySelectorAll('.date');
            
            jsonResponse.forEach((item, index) => {
                if (dateElements[index]) {
                    dateElements[index].textContent = item.date;}});

const imgElements = document.getElementsByTagName('img');
            
            Array.from(jsonResponse).forEach((item, index) => {
                if (imgElements[index]) {
                            imgElements[index].src = item.image;}});

const cultureElements = document.getElementsByClassName('culture');
            
                            Array.from(jsonResponse).forEach((item, index) => {
                                if (cultureElements[index]) {
                                    cultureElements[index].textContent = item.type;}});

const textinElements = [
                                        document.getElementById('textin1'),
                                        document.getElementById('textin2'),
                                        document.getElementById('textin3'),
                                        document.getElementById('textin4'),
                                        document.getElementById('textin5'),
                                        document.getElementById('textin6'),
                                        document.getElementById('textin7'),
                                        document.getElementById('textin8'),
                                        document.getElementById('textin9'),
                                        document.getElementById('textin10')
                                    ];
                        
                             jsonResponse.forEach((item, index) => {
                                        if (textinElements[index]) {
                                            const mainText = textinElements[index].childNodes[0];
                                            if (mainText.nodeType === Node.TEXT_NODE) {
                                                mainText.textContent = item.headline + '\n';
                                            }
                                        }
                                    });
                        
                                    const images = document.getElementsByTagName('img');
                                    const textBox = document.getElementById('textBox');
                                    
                                    
                                    Array.from(images).forEach((image, index) => {
                                        image.addEventListener('click', () => {
                                            if (textBox.style.display === 'none' || textBox.style.display === '') {
                                                textBox.style.display = 'block';
                                            } else {
                                                textBox.style.display = 'none';
                                            }
                                            
                                            textBox.textContent = jsonResponse[index].content;
                        
            
                                        });
                                    });
                                
                                    
 if(!response.ok){
            throw new Error("Could not fetch response");
        }
        
    }
    catch(error){
        console.error(error);
    }
}
fetchData();



