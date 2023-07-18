import React, { useEffect, useState } from 'react'
import './css/Header.css'
import Navbar from './Navbar'
import HeaderCenter from './HeaderCenter'
import NavbarMobile from './NavbarMobile'
import SearchSection from './SearchSection'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === '/'){
            // alert('ana sehife')
        }else{
            // alert('diger sehife')
        }
    }, [location.pathname])

    //searc menu ac
    const [searchOpen , setSearchOpen] =useState(false)
    const searchmenuOpen =()=>{
      setSearchOpen(true)
    }
    const [mobileMenuOpen, setMobileMenuOpen]= useState(false)
    const mobileOpen =()=>{
      setMobileMenuOpen(true)
    }
    const mobileClose =()=>{
      setMobileMenuOpen(false)
    }
//scroll
 //    //scroll
 const [fixed, setFixed] = useState(false)
 //scroll
 window.addEventListener('scroll', () => {
   if (window.scrollY > 200) {
     setFixed(true)
   } else {
     setFixed(false)
   }
 })
  return (
    <div className='header-container'>
        <Navbar fixed={fixed} searchmenuOpen={searchmenuOpen} setMobileMenuOpen={mobileOpen}/>
        <HeaderCenter/>
        <div className={`bg-search-section ${searchOpen? 'search-active' : ''}  d-flex align-items-center justify-content-center `} onClick={()=>(setSearchOpen(false))}>
       <SearchSection/>
       </div>
       <div className={`bg-navbar-mobile ${mobileMenuOpen? 'bg-mobile-aktive' : ''}`} onClick={mobileClose} ></div>
       <div className={` navbar-mobile-container ${mobileMenuOpen? 'mobile-aktive' : '' }`}>
       <NavbarMobile mobileClose={mobileClose}/>
       </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed excepturi similique officiis officia culpa adipisci, consequatur et quibusdam eligendi eum. Excepturi illo repudiandae eos quaerat eius nisi, cum voluptatem?
       Obcaecati, nulla voluptate commodi qui hic nesciunt animi consequuntur eos alias dolores nam voluptatum pariatur ullam fugiat maxime nemo, ipsam, sint reprehenderit. Tenetur eos vel corrupti veritatis culpa voluptas maiores?
       In laudantium fuga consequatur et, dolor itaque aliquam, praesentium libero quaerat, temporibus facilis? Voluptatem magni aut necessitatibus laudantium distinctio, mollitia dolorem obcaecati expedita cum quasi harum eaque, consequatur aliquid perferendis?
       Suscipit fugit provident perspiciatis, architecto neque repellat dolorem possimus reprehenderit, ducimus commodi placeat culpa. Voluptas at beatae eligendi reiciendis laborum dolores quod neque nobis nihil. Explicabo accusantium rem qui autem!
       Itaque modi error facere illum incidunt temporibus voluptate ut, explicabo adipisci quibusdam expedita, esse nemo dignissimos amet possimus odio sequi ipsam impedit, sit labore. Dolorum, distinctio. Nihil unde similique exercitationem.
       Nobis sequi nisi explicabo ad ea quam voluptas adipisci, reprehenderit corrupti, numquam eum quisquam praesentium? Est iure repellendus ullam necessitatibus accusamus dolorem totam voluptatum vitae. Eum doloremque aperiam perspiciatis sint?
       Tempora exercitationem repudiandae quis aspernatur ipsa soluta tempore nihil dicta. Laborum excepturi eligendi quaerat natus laudantium doloremque culpa voluptatem soluta, eos iste officiis quam maxime mollitia recusandae incidunt commodi at!
       Illo dolores sint porro nemo alias! Ab odit dignissimos explicabo, dolorum optio laudantium! Vero, quis porro, voluptas repellendus eaque accusamus ut perferendis at, ducimus tenetur impedit quod in sapiente corporis!
       Voluptas blanditiis odit aspernatur nobis aperiam excepturi a est magnam, sed, delectus earum illum accusantium saepe quam similique ratione explicabo magni tempore quia maiores itaque deleniti animi velit. Quo, esse?
       Itaque, saepe maiores totam iusto alias magnam temporibus dolorem ut ea delectus, ratione illo praesentium asperiores amet, vero quisquam sunt nemo. Saepe, neque! Aspernatur dolore officia suscipit animi, blanditiis quae!
       Cum, tenetur incidunt soluta recusandae dignissimos non, fuga velit perspiciatis debitis dolorum ipsa, voluptas sit sequi ipsum culpa assumenda praesentium placeat iusto nisi in impedit nam consectetur! Quaerat, ipsa ad!
       Quae quisquam aliquam similique fugit vero ab cum, placeat architecto tempore omnis commodi fugiat ipsa perspiciatis eaque quibusdam. Perferendis aliquid sequi maxime cum omnis eaque ratione tempore eius ad porro.
       Ea reprehenderit voluptatem illo laudantium repellendus earum dolores ipsam inventore id a delectus impedit ratione quaerat ab hic, maiores obcaecati! Placeat minus fuga architecto nisi rerum aliquam hic inventore modi.
       Culpa sint amet enim id unde perferendis accusantium ut non voluptatibus minus nulla laboriosam, earum obcaecati ullam sed ex mollitia veniam veritatis at placeat laborum. Aliquam accusamus quod culpa corporis.
       Ab saepe repellendus odio dolor, vel quisquam. Asperiores similique necessitatibus, natus hic omnis, delectus explicabo quae magni modi laborum suscipit magnam at. Molestiae voluptate eaque corporis rerum perferendis, accusantium fuga.
       Minima illo deleniti mollitia perspiciatis id! Eaque, nemo quas? Deleniti asperiores minus beatae est veritatis at modi possimus? Ea et deleniti temporibus at fuga commodi veniam mollitia quaerat tempore doloremque.
       Nesciunt in sit officia ex quos voluptate reprehenderit error cupiditate tempora earum dolorum consequatur ullam facilis, aut quasi quis vitae molestias sequi eum excepturi. Perspiciatis nam ratione quos delectus praesentium.
       Rerum magni suscipit cupiditate adipisci vitae, odit possimus doloribus sint labore, dolorem quisquam et, ratione totam! Officia culpa illo sed? Nesciunt repellendus architecto nulla harum, tempora non quos quia omnis?
       Totam dicta nam ex consequatur ipsum, tempora libero sit velit, animi esse laudantium suscipit quae soluta deleniti magnam perferendis eveniet? Quia, animi eos vero quis sapiente nisi mollitia impedit provident?
       Optio, architecto libero. Deleniti repudiandae quo commodi cumque illo debitis nihil perspiciatis ratione modi. Velit quae aliquid debitis unde culpa distinctio repellendus harum veritatis? Distinctio dolorem sapiente nostrum quidem ex.
       Perferendis, voluptatem. Doloribus numquam omnis, corrupti esse natus maiores modi officia nesciunt nisi. Incidunt culpa ducimus consequatur quibusdam exercitationem quod sequi assumenda. Iusto vero temporibus enim neque quo, aliquid dolore.
       Veritatis distinctio consequatur possimus laborum quae. Expedita fuga modi illo aliquam blanditiis magnam, alias, ex itaque temporibus corrupti hic optio distinctio a voluptatum rerum aperiam aliquid repellendus minima animi provident.
       Neque totam, iure quae facilis voluptas laborum nesciunt quia laudantium incidunt, placeat ipsa perferendis fugiat dolor eveniet molestiae ad autem aut a excepturi! Eos inventore quibusdam perferendis tempore amet hic!
       Soluta, at quia ea deleniti accusamus deserunt eaque amet magni voluptas nemo asperiores quasi, odio debitis delectus recusandae. Quaerat, eligendi sit. Voluptatibus voluptates in est, ratione quae delectus soluta at.
       Aut voluptatibus laborum nulla quia architecto, asperiores dolor nemo voluptate facilis minima tempora repellat. Aperiam, voluptas adipisci? Natus blanditiis aliquid pariatur et! Veniam nulla ullam eos, earum modi optio neque.
       Quo odit placeat autem cum nulla neque voluptatibus quia, dolores illo ipsum tenetur deserunt voluptates est saepe distinctio doloribus. Minima necessitatibus earum perspiciatis, voluptatibus cumque facere modi illum nulla incidunt?
       Quis a perspiciatis vitae deleniti. Veniam porro amet ullam ut accusantium placeat harum fuga saepe, architecto nobis eligendi quae consequuntur autem, necessitatibus, hic omnis quis. Perferendis tempore dolorum iusto totam!
       Dignissimos nisi ut, aliquam, officia animi, commodi expedita dolorem quidem odio accusamus inventore aspernatur porro. Accusamus tempora nesciunt veniam corporis ipsam magni, temporibus possimus ea sit esse veritatis. Voluptatum, dolores?
       Asperiores minus veritatis animi beatae sit, aut, similique laborum voluptates, consequatur quo nostrum esse reiciendis? Aspernatur ab iste delectus. Fuga dolorum beatae totam nisi quibusdam unde facilis magni provident optio.
       Officiis aliquid dolor nostrum iusto. Doloremque repudiandae recusandae tenetur itaque atque ipsam rerum enim at libero laudantium, delectus, tempora facere dignissimos ad ipsum accusantium fuga dicta ut voluptatum modi ipsa.
       Sint est, veniam mollitia minima alias itaque fugiat suscipit hic neque qui blanditiis sequi nihil provident corporis vitae quaerat soluta asperiores! Minus voluptatem mollitia, dicta voluptatibus unde ea fugiat error.
       Modi sed consequuntur incidunt similique nemo labore architecto accusamus minima, enim sapiente iste reiciendis dolorum quaerat aut vel inventore, voluptas veniam dolorem suscipit dolor eum. Enim numquam beatae assumenda at.
       Accusamus incidunt excepturi perspiciatis, nesciunt aperiam optio ad nemo delectus consequuntur consectetur, modi quibusdam voluptates veritatis veniam deleniti nobis repellendus temporibus quas praesentium maxime? Ut velit rerum enim quasi delectus.
       Velit quasi non rem itaque aliquam doloribus, ducimus culpa minus neque nobis, beatae molestias fugit deleniti magni voluptatum quod ad. Quos sint tempore veniam, non saepe debitis adipisci deleniti libero!
       Asperiores voluptatum ratione, animi libero, modi facilis optio recusandae ea temporibus sit, suscipit ipsam debitis eveniet. Facere, ducimus esse magni sint quas hic quaerat modi. Quibusdam laudantium tempore odit eius!
       Eos quidem tempore alias magnam? Consequatur voluptatum exercitationem labore mollitia ullam ut excepturi! Cum aliquid sed, autem natus nihil facere tenetur dolorum suscipit? Veniam hic temporibus quibusdam, unde aperiam maiores!
       Error, maxime autem sapiente minus dolor cum molestiae asperiores ab porro labore est, libero ratione reiciendis modi similique soluta. Culpa laboriosam facilis nemo. Vero ullam animi quas ex iste error!
       Pariatur a consectetur doloremque officiis eos obcaecati molestias illo ipsum explicabo eligendi incidunt ipsam fugiat iste doloribus aperiam distinctio quis, est soluta non! Quia ex sed est iste natus atque?
       Atque debitis sunt beatae corporis illum fugit quos nostrum, repellat eaque animi laudantium asperiores sequi sed. Exercitationem dolor, consectetur in id unde, incidunt totam sapiente enim perspiciatis voluptate repellendus laudantium.
       Deleniti deserunt voluptas eveniet quos distinctio, praesentium quia dicta repellendus. Reiciendis excepturi labore tenetur rem esse non facere iusto sunt, autem odio perferendis culpa, voluptatum laboriosam exercitationem quod repudiandae itaque.
       Id quibusdam vel nam molestiae, dolorem minima itaque sint! Aliquid sint provident omnis quas similique. Eaque doloribus soluta, ipsam esse iste quae at minima labore quibusdam hic optio nesciunt quisquam?
       Quod, aut accusantium. Voluptate est laudantium repellat, cum, veritatis iste cumque amet fugit minus fugiat nulla sunt. Ut animi similique cupiditate quam, dolorem quia quibusdam. Commodi omnis velit temporibus corporis!
       Ut, cumque. Cupiditate necessitatibus veniam cumque! Quasi, necessitatibus. Corrupti molestiae vitae adipisci provident veniam commodi placeat, ut, natus dolores doloremque dolor numquam a nihil illum eius repellendus, repellat obcaecati laborum.
       Nemo maxime rem aliquid consectetur nobis quos quia. Dignissimos odit quidem veniam quo laboriosam officiis natus amet, dolores itaque hic pariatur dolorem. Iste magnam, illum iure laborum cumque modi esse!
       A voluptate officiis hic. Qui dolor corrupti similique praesentium nihil architecto earum, repellendus corporis tenetur eligendi sequi voluptatem voluptates quas? Beatae laudantium, ipsum eius nihil itaque odio iste perspiciatis vitae.
       Eaque odit error labore sint dicta saepe nesciunt voluptas incidunt obcaecati, animi similique fugit, perferendis nisi! Mollitia aspernatur laborum sapiente, vel officiis facilis totam a ullam nulla harum dicta dolore.
       Asperiores libero iste dolores blanditiis quos, doloremque itaque ipsam. Debitis, enim eveniet hic nam laborum modi et suscipit asperiores rem distinctio praesentium commodi iste ad soluta quasi quae ratione ea.
       Repellendus nemo doloremque quaerat quasi esse? Dolorem, perspiciatis pariatur! Ducimus nihil ipsa quo saepe, officia sit. Provident debitis corporis excepturi, consequuntur totam dolore facere, deserunt porro quasi, corrupti saepe magnam?
       Quas blanditiis quis iure impedit quae numquam atque odit tempore cum magni obcaecati ex itaque accusamus excepturi beatae, nisi nemo id nulla ducimus, sint reprehenderit voluptatibus provident. Repellat, nam doloribus.
       Nulla porro, omnis maiores placeat corrupti aperiam deserunt. Commodi enim, rerum, eaque perferendis nemo aspernatur maiores culpa fugiat velit explicabo odio, aperiam beatae! Consequuntur, cumque. Perferendis dolore dignissimos enim quis!
       Laboriosam fuga neque voluptas officiis vitae error rerum quam quas! Ullam delectus eaque similique, explicabo ipsum voluptate tempora nulla excepturi esse, dicta, rerum cumque nihil quia aperiam tempore nobis impedit!
       Ipsum, nulla optio a cupiditate sed iure enim, at, laboriosam magni eaque aut laudantium ea dolorum adipisci rerum voluptas temporibus architecto iste magnam. Eius, reprehenderit! Illo rerum dicta numquam molestias?
       Ex eaque, asperiores provident voluptate fuga tempore commodi aut unde saepe nemo exercitationem quos iste maxime officiis placeat neque incidunt tenetur. Tempora sit autem accusantium quaerat iusto, voluptatum laborum blanditiis?
       Praesentium, dolorum ratione nostrum nobis reprehenderit dicta asperiores ipsum sit corporis velit nulla doloribus totam itaque officia esse! Assumenda laudantium maxime et quis minima sed officia incidunt laborum velit aspernatur.
       Ea facilis velit, facere doloribus debitis aliquam dolore ipsam nobis magni magnam molestias eveniet ut tempore exercitationem esse deserunt autem quo suscipit incidunt saepe, illo repudiandae expedita? Cum, architecto itaque.
       Ipsa rem a, fugit voluptate totam deserunt unde impedit assumenda ut tempore facilis, iure illo sed consequuntur nesciunt eum, hic amet. Repudiandae odio praesentium consequatur corrupti nobis ut quis laborum.
       Illum obcaecati natus neque eaque, error libero. Nihil, numquam! Temporibus tempora nostrum, praesentium ipsa consectetur fugiat voluptas est cupiditate autem fugit, blanditiis a ea asperiores consequuntur esse animi maiores cum!
       Facere amet recusandae dolores repellendus natus unde debitis excepturi, maiores culpa sequi necessitatibus cumque aliquid veniam ea rem pariatur totam fugit dolor quo delectus? Voluptate, necessitatibus. Recusandae non quam excepturi!
       Nesciunt consequatur saepe culpa numquam quisquam doloremque libero labore adipisci veniam accusantium enim repudiandae fugit quos possimus minus debitis deleniti amet ullam excepturi harum ex, exercitationem voluptates molestias facere? Nulla?
       Reiciendis, repellendus fugiat quasi eligendi adipisci voluptas dolore quas. Minima, aliquid! Sed officiis, similique commodi nam saepe itaque aliquid quas consectetur. Autem error tempora reprehenderit quis perspiciatis fugit dolores facere.
       Voluptate iure quas repellat, sunt blanditiis error ratione dolorum. Sapiente hic aliquam assumenda quos impedit repellat? Eius nam similique consequatur voluptas error expedita. Nulla repudiandae, quidem totam similique ducimus aliquam.
       Nulla mollitia culpa illo cumque asperiores eligendi corporis sapiente beatae vero quidem! Magni consectetur laudantium beatae repellendus, deserunt veritatis debitis voluptas amet, odit odio consequatur dolores iusto unde sequi consequuntur.
       Ipsum tenetur neque maxime sapiente exercitationem sunt minus? Ullam, libero possimus fugit nisi quidem facere laborum atque commodi provident repellendus debitis impedit? Nam consectetur laboriosam quia labore, minus temporibus neque?
       Aut similique dolorum voluptas odio reiciendis tenetur iusto, ratione dolore numquam quaerat ipsum a rem eligendi, porro tempore obcaecati iste illo sunt, vitae quae. Officia iste quibusdam sint consectetur natus?
       Necessitatibus officiis, voluptates rerum quidem exercitationem eos non asperiores similique obcaecati incidunt id unde sapiente ex totam doloremque maxime aliquid, aut iure ea in numquam reprehenderit? Exercitationem nesciunt adipisci esse?
       Corrupti non rerum error repellat nostrum minima laborum. Saepe laborum, quasi quas tempore recusandae quia illum inventore molestiae voluptates ex a molestias cum consequatur in iste porro amet? Explicabo, distinctio.
       Ratione eius assumenda beatae modi doloremque sequi magni, eligendi nam voluptatum rem magnam sapiente reiciendis placeat culpa unde perspiciatis illo aut labore aspernatur molestias, perferendis nobis odio quod? Adipisci, ad.
       Fugiat maiores veniam soluta nesciunt rem modi deserunt corporis officia ratione quibusdam. Officiis est vitae eos deserunt? Delectus officiis inventore deleniti, eos molestias ex culpa repellat perferendis sint, non optio?
       Voluptatem qui eum, nulla animi explicabo adipisci omnis. Laborum quibusdam totam libero, ratione asperiores aliquid incidunt exercitationem maxime vel quidem. Qui omnis natus facilis laudantium dignissimos odit id voluptas suscipit?
       Animi provident ad blanditiis, dolorum, soluta nihil libero laborum qui ipsum maiores placeat dolor? Assumenda consequatur voluptates facere itaque! Possimus deleniti quisquam at, esse rerum quidem odit eligendi quam modi?
       Non, quia ea! Architecto fuga, beatae hic repellendus magnam eligendi id voluptatibus. Hic illo iste eligendi fuga amet! Totam velit deserunt fugit animi eaque minima suscipit corrupti ea vel consequatur.
       Laborum nihil illo libero voluptatem quod soluta perferendis repellendus illum quibusdam quis! Maiores voluptatum quibusdam eligendi perferendis dignissimos ipsum, soluta beatae explicabo rem aperiam magnam odit atque ducimus repellat distinctio?
       Quae enim natus nulla ab labore illo molestias quos aut iure at, beatae magnam possimus. Ullam suscipit illo officiis reprehenderit facilis. Itaque tenetur laborum voluptates reprehenderit impedit sint temporibus rem!
       Nihil magni eius aliquam accusantium aperiam rem dolorem eaque necessitatibus incidunt, sed laboriosam. Animi soluta optio consectetur quia facilis tempore, voluptatum quae repudiandae maxime amet quasi tenetur id perspiciatis delectus.
       Exercitationem quibusdam fugit tenetur blanditiis ipsum sint in veritatis sequi officia consectetur cupiditate sed reprehenderit odit doloribus accusantium ad alias culpa, architecto qui doloremque voluptatem ab. Dolore magni eveniet quod.
       Deleniti quo vero, provident animi ut, mollitia itaque dolore a, asperiores nesciunt delectus fugit explicabo labore laboriosam. Ducimus perspiciatis quas quidem, velit quae nemo similique obcaecati reprehenderit nihil inventore perferendis.
       Corrupti maiores natus harum reiciendis quisquam ullam fugiat nulla, modi beatae, placeat in, ipsa veniam nobis magnam totam vitae incidunt animi praesentium provident. Ducimus quia possimus sit cum mollitia optio?
       Dolorum velit corrupti consequuntur quis voluptas tenetur ab eius sint doloribus aperiam delectus itaque alias, maxime veritatis, soluta aliquid. Adipisci, consectetur voluptatibus? Sequi nihil optio dolorum officia modi molestiae vel?
       Accusantium aspernatur non molestiae, quia maiores autem magnam modi ullam hic minima praesentium, repellendus officia pariatur itaque nihil laudantium, expedita ex! Eum facere corporis quas praesentium assumenda facilis labore omnis!
       Quas tempora eius rerum quam at molestias ratione deserunt, id, perferendis, quae inventore recusandae atque error. Iure rerum, neque amet hic architecto dolorem veniam veritatis et labore placeat nobis sed?
       Nihil sapiente laboriosam culpa voluptas aperiam consequuntur, error voluptatem, rem et illum ea temporibus pariatur dolor tempora voluptate ipsam perferendis nisi cum repellat vel neque incidunt est? Beatae, enim nulla?
       Blanditiis id corporis neque voluptates nisi molestiae adipisci facilis, accusamus a velit similique iure facere quod vitae magnam ullam omnis maxime mollitia voluptate sapiente pariatur reiciendis illum perferendis accusantium. Corrupti!
       Quam porro quo tempora aspernatur a rerum soluta magni eligendi doloremque repudiandae vero sed et qui aut, ipsam veritatis fugit reiciendis facilis similique itaque ea ipsa. Ipsam molestias unde placeat.
       Quis ut consequatur, quibusdam atque voluptatem eum sequi deserunt? Hic aliquam natus doloremque, mollitia magni aspernatur porro excepturi, aperiam adipisci inventore delectus vel dolor ut! Facere maxime provident magni dolorem.
       Provident id cum nostrum laboriosam nam quaerat quos cupiditate ipsa. Magni impedit quos laudantium! Voluptate labore doloremque blanditiis a neque eum maxime reprehenderit porro, at et eos nihil, error corrupti?
       Officiis, consectetur exercitationem? Eum facilis culpa ipsam ipsa deleniti dignissimos in quas. Error mollitia culpa id vel inventore non eos perspiciatis, magni sunt quia officiis reiciendis dolor ad eligendi pariatur.
       Quia deleniti dicta necessitatibus praesentium eius, hic laborum quidem odio! Sit dolor quos labore accusamus perferendis cupiditate cumque! Esse architecto tenetur, ut ab officiis laudantium dolorum voluptatibus ea harum earum?
       Amet nostrum saepe sequi deleniti accusamus officia rem sapiente, consectetur illum, suscipit, ab porro ex molestias corporis ut fugit debitis. Culpa, libero. Maiores, nesciunt. Facilis architecto culpa accusantium saepe sunt.
       Praesentium pariatur molestiae ex deleniti facilis corrupti voluptatibus! Minima, necessitatibus magni nemo sit praesentium beatae, blanditiis explicabo quam at asperiores quos perspiciatis. Tempore nostrum sed omnis, recusandae obcaecati alias asperiores!
       Non asperiores voluptatem officia, pariatur totam distinctio, sunt neque repudiandae vero esse nulla natus. Quaerat atque quasi porro quae doloremque eveniet nobis architecto, sunt, id repellendus, adipisci numquam eligendi voluptatum.
       Reprehenderit quidem est et tempora ipsa mollitia deserunt quibusdam magnam! Voluptas asperiores inventore nihil cumque reiciendis et. Laudantium nulla consequuntur dignissimos laboriosam, quas dolorum voluptas nesciunt soluta, quasi debitis architecto!
       Temporibus quos ex error adipisci, ad architecto repellat magni labore quaerat deserunt? Iure libero illo voluptate dignissimos, error rerum in repellendus blanditiis molestias harum vero distinctio non est ducimus eveniet.
       Deserunt nemo at quibusdam perspiciatis consectetur aspernatur corrupti fugiat consequatur, impedit dolorum fugit, sapiente repudiandae maxime reprehenderit omnis aliquid ducimus eaque autem totam error repellat reiciendis beatae. Temporibus, sunt cum!
       Eaque dolorem fugiat iure sit quos ab voluptatibus id magni libero tenetur. Voluptas maxime nisi tempora, dolorem fugit nobis accusamus animi, iusto numquam minima amet unde ducimus veniam reiciendis officia.
       Voluptatum itaque molestiae, rem vel nulla laborum ipsa velit consectetur quibusdam impedit perspiciatis voluptate assumenda accusantium recusandae omnis repellat facilis quis blanditiis atque, veritatis dolorum! Voluptatibus unde aut aperiam recusandae!
       Officia adipisci provident atque aperiam possimus sed cum ratione dicta aspernatur, expedita in animi. Numquam nemo illum, quaerat maiores repellat cupiditate aliquam tenetur explicabo natus nulla eum quia cumque? Velit.
       Voluptates itaque est, ex suscipit dolores deserunt debitis voluptate porro nihil deleniti molestiae eos. Nam sed quos voluptatem laudantium repudiandae facilis? Alias autem earum ipsam consequatur nihil necessitatibus, hic ratione.
       Soluta quam recusandae maxime, numquam harum illum quasi et deleniti vel nemo hic labore, fuga rerum, beatae id dolorem commodi necessitatibus. Pariatur similique deleniti, consectetur vel aspernatur cumque? Nam, mollitia.
       Numquam reiciendis voluptatem, dignissimos maxime ad at tenetur ipsam delectus accusamus. Veritatis deserunt praesentium corrupti possimus consequatur! Odit ut fuga itaque nisi neque labore repellat cumque, exercitationem blanditiis fugiat sequi?
       Aspernatur laudantium ratione reprehenderit molestias aliquam, dicta quasi, voluptates quibusdam nesciunt fugiat omnis! Unde iste excepturi molestias nemo dolorem, explicabo saepe repellendus tempore sit sunt rem, atque architecto esse soluta?</p>
    </div>
  )
}

export default Header