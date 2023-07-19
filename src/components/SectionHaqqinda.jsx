import React from 'react'
import './css/SectionHaqqinda.css'
import aboutimg from './imgs/About/about-img.png'
import Title from './Title'

const SectionHaqqinda = () => {
    return (
        <div className='section-haqqinda-kontainer container py-5'>
            <Title title='Haqqımızda' />
            <div className='section-haqqinda row'>
                <div className="section-haqqinda-left col-lg-6 ">
                    <img className='w-100 h-100' style={{objectFit:'cover'}} src={aboutimg} alt="img" />
                </div>
                <div className="section-haqqinda-right col-lg-6 ps-4">
                    <p>Başkent Restoran və Şiriniyyat Evi 2004-cü ildən dəyərli müştərilərinin xidmətindədir. Bakı şəhərində Memar Əcəmi, Nəriman Nərimanov, 28 May şöbələri olmaqla 3 restoran və İnşaatçılar şöbəsində isə şiriniyyat evi olaraq fəaliyyət göstərir. Restoran üçün qonaqların məmnuniyyəti ən vacib pirinsiplərdən olduğu üçün daim xidmət keyfiyyətinin artırılması üzərində çalışır. İş fəaliyyəti boyu daim ixtisas təlimləri keçmiş personal ilə müştərilərin həm istirahət edəcəyi, həm də damaq dadına uyğun yemək çeşidləri ilə zəngin məkanlardan biri olmaqda iddialıdır. Restoranlar şəbəkəsində həftə içi və həftə sonu olmaqla səhər yeməyi, biznes görüşlərinizin, təqdimatların keçirilməsi üçün ayrıca otaqlar, dostlarınızla, həmkarlarınızla çay-kofe guşəsində rahatlıqla söhbət etmə imkanı, həmçinin iştən sonra günün gərginliyini üzərinizdən atmağa kömək edəcək canlı musiqi mövcuddur. Dostlarınız, doğmalarınızla zəngin milli, türk və avropa mətbəxinə aid dadlı təamlardan dada, ailənizlə birliktə rahat şəkildə əylənə və istirahət edə bilərsiniz. Restoranların hər birində hər zövqə uyğun menyudan istifadə etməklə hər qonağa özəl yanaşmanı hiss etmək mümkündür.
                        BAŞKENT - " Hər gün eyni sevgi və həyəcanla xidmətinizdəyik. Gəlin, qonağımız olun! "</p>
                    <button className=''>Ətraflı</button>
                </div>
            </div>

        </div>
    )
}

export default SectionHaqqinda