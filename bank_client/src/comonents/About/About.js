
import './about.css'

const About = () => {
    const discountInfo = 
    [{
        title:"Дневные скидки по будням",
        description: "До -50% с 12 до 17 часов на основное меню: пн – 50%, вт – 40%, ср – 30%, чт – 20%",
        img:"./img/discount.svg"
    },
    {
        title:"Дневные скидки по будням",
        description: "До -50% с 12 до 17 часов на основное меню: пн – 50%, вт – 40%, ср – 30%, чт – 20%",
        img:"./img/parking.svg"
    },
    {
        title:"Дневные скидки по будням",
        description: "До -50% с 12 до 17 часов на основное меню: пн – 50%, вт – 40%, ср – 30%, чт – 20%",
        img:"./img/present.svg"
    }]

    const restarauntInfo = 
    [
        {
            title:"АДРЕС",
            description:"Москва, \nКутузовский проспект, 2/1с6",
            img:"./img/placeholder.svg"
        },
        {
            title:"ЧАСЫ РАБОТЫ",
            description:"Ежедневно\n09:00 - 00:00",
            img:"./img/clock.svg"
        },
        {
            title:"ТЕЛЕФОН",
            description:"+7 (495) 161 61 42",
            img:"./img/iphone.svg"
        },
        {
            title:"ПОЧТА",
            description:"info@matryoshka-rest.ru",
            img:"./img/message.svg"
    }]

    const socialInfo = [
        "./img/facebook.svg",
        "./img/instagram.svg",
        "./img/telegram.svg",
        "./img/twitter.svg",
        "./img/vk.svg",
        "./img/youtube.svg"
    ]

    return(
        <div className="About">
            <div className="About__discounts">
                {
                discountInfo.map(record => (
                    <div className="About__discount-block">
                        <div className="About__logo" style={{backgroundImage: `url(${record.img})`}}></div>
                        <div className="About__text-block">
                            <span class="About__title">{record.title}</span>
                            <span class="About__description">{record.description}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="About__info">
                <div className="About__contacts-container">
                {
                    socialInfo.map(img => (
                        <div className="About__contact" style={{backgroundImage: `url(${img})`}}></div>
                        ))
                }
                </div>
                <div className="About__info-container">{
                    restarauntInfo.map( record =>(
                        <div className="About__info-block">
                            <div className="About__logo" style={{backgroundImage: `url(${record.img})`}}></div>
                            <span class="About__title">{record.title}</span>
                            <span class="About__description">{record.description}</span>
                        </div>
                    ))
                }</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4501.218277081453!2d37.47396850585936!3d55.661006927490206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2023687053decdb4!2z0J7QsdGJ0LXQttC40YLQuNC1IOKEljEg0JzQmNCi0KXQog!5e0!3m2!1sru!2sru!4v1623159836557!5m2!1sru!2sru" width="600" height="310" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export {About}