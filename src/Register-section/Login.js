import React, { useEffect } from 'react'
import './Register.css'

const Login = ({ setPopup }) => {


  return (
    <div className='main-container'>
      <div className='middle-container'>
        <div className='carousel-container'>
          {/* top-slides */}
          <div class="scroll">
            <div class="scroll-wrapper">
              <div class="orb">
                <img src='https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/naagin-s06-bangla-3x4-1666757297288.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.tallengestore.com/cdn/shop/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7_large.jpg?v=1582781089' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodHindiMoviePoster_2da9ce05-c1f0-45a7-a7c3-c54d132d41e9.jpg?v=1675251727' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfa315162254289.63d289c6b430f.jpg' alt='logos' />
              </div>
              <div class="orb purple">
                <img src='https://www.tallengestore.com/cdn/shop/products/Art_Poster_-_Sicario_-_Tallenge_Hollywood_Collection_f722e295-e77e-4479-aa10-8a8a29140dc0.jpg?v=1505078992' alt='logos' />
              </div>
              <div class="orb green">
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfa315162254289.63d289c6b430f.jpg' alt='logos' />
              </div>
            </div>
            <div class="scroll-wrapper">
              <div class="orb">
                <img src='https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://cdn4.sharechat.com/newhindimovieposters_8af68668-9cc3-4e12-a7c0-a24494113e3e-b03cb56b-d11f-4a0c-8b9c-0d213ca0c980_cmprsd_40.jpg?tenant=sc&referrer=tag-service&f=rsd_40.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91GONzCyOcL.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9gHxWXNMUr3lMJr4W8rWpVh6vwyjriJ6bQ&usqp=CAU' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://1.bp.blogspot.com/-9bjEGisCCV0/XpVZKGYlMSI/AAAAAAANDEE/IkNb5kxcyRgi8ihTEJ-HZ5SgIrDjCRm2QCLcBGAsYHQ/s1600/Sharath%2BMarar%2B%25285%2529.jpeg' alt='logos' />
              </div>
              <div class="orb purple">
                <img src='https://akamaividz2.zee5.com/image/upload/w_224,h_336,c_scale,f_webp,q_auto:eco/resources/0-6-4z5215366/portrait/1920x7700a377453fe164443a1957ca923474562.jpg' alt='logos' />
              </div>
              <div class="orb green">
                <img src='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/naagin-s06-bangla-3x4-1666757297288.jpg' alt='logos' />
              </div>
            </div>
          </div>

          {/* middle-slides */}
          <div class="scroll">
            <div class="scroll-wrapper-right">
            <div class="orb">
                <img src='https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://cdn4.sharechat.com/newhindimovieposters_8af68668-9cc3-4e12-a7c0-a24494113e3e-b03cb56b-d11f-4a0c-8b9c-0d213ca0c980_cmprsd_40.jpg?tenant=sc&referrer=tag-service&f=rsd_40.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91GONzCyOcL.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://onlinecollegestreet.com/cdn/shop/products/zee-bangla-sonar-sansar-magazine.jpg?v=1643302785' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://1.bp.blogspot.com/-9bjEGisCCV0/XpVZKGYlMSI/AAAAAAANDEE/IkNb5kxcyRgi8ihTEJ-HZ5SgIrDjCRm2QCLcBGAsYHQ/s1600/Sharath%2BMarar%2B%25285%2529.jpeg' alt='logos' />
              </div>
              <div class="orb purple">
                <img src='https://akamaividz2.zee5.com/image/upload/w_224,h_336,c_scale,f_webp,q_auto:eco/resources/0-6-4z5215366/portrait/1920x7700a377453fe164443a1957ca923474562.jpg' alt='logos' />
              </div>
              <div class="orb green">
                <img src='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/naagin-s06-bangla-3x4-1666757297288.jpg' alt='logos' />
              </div>
            </div>
            <div class="scroll-wrapper-right">
              <div class="orb">
                <img src='https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/naagin-s06-bangla-3x4-1666757297288.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.tallengestore.com/cdn/shop/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7_large.jpg?v=1582781089' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodHindiMoviePoster_2da9ce05-c1f0-45a7-a7c3-c54d132d41e9.jpg?v=1675251727' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfa315162254289.63d289c6b430f.jpg' alt='logos' />
              </div>
              <div class="orb purple">
                <img src='https://onlinecollegestreet.com/cdn/shop/products/zee-bangla-sonar-sansar-magazine.jpg?v=1643302785' alt='logos' />
              </div>
              <div class="orb green">
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfa315162254289.63d289c6b430f.jpg' alt='logos' />
              </div>
            </div>
          </div>

          {/* bottom-slides */}
          <div class="scroll">
            <div class="scroll-wrapper">
            <div class="orb green">
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfa315162254289.63d289c6b430f.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/naagin-s06-bangla-3x4-1666757297288.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.tallengestore.com/cdn/shop/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7_large.jpg?v=1582781089' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodHindiMoviePoster_2da9ce05-c1f0-45a7-a7c3-c54d132d41e9.jpg?v=1675251727' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfa315162254289.63d289c6b430f.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg' alt='logos' />
              </div>
            </div>
            <div class="scroll-wrapper">
            <div class="orb">
                <img src='https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/naagin-s06-bangla-3x4-1666757297288.jpg' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.tallengestore.com/cdn/shop/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7_large.jpg?v=1582781089' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodHindiMoviePoster_2da9ce05-c1f0-45a7-a7c3-c54d132d41e9.jpg?v=1675251727' alt='logos' />
              </div>
              <div class="orb">
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfa315162254289.63d289c6b430f.jpg' alt='logos' />
              </div>
              <div class="orb purple">
                <img src='https://onlinecollegestreet.com/cdn/shop/products/zee-bangla-sonar-sansar-magazine.jpg?v=1643302785' alt='logos' />
              </div>
              <div class="orb green">
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfa315162254289.63d289c6b430f.jpg' alt='logos' />
              </div>
            </div>
          </div>
        </div>
        <div className='tint-color'>
          <div className='form-section'>
            <div className='form-items'>
              <div className='cancel'>
                  <i className='bx bx-x' onClick={() => setPopup(false)}></i>
              </div>
              <h4>Login or SignUp to continue</h4>
              <div className='fields'>
                <label>Subscription Id</label>
                <input type='text' placeholder='Enter Your Subscription Id'/>
                <i class='bx bx-error-circle'></i>
              </div>

              <div className='fields'>
                <label>PIN</label>
                <input type='text' placeholder='Enter Your PIN'/>
                <i class='bx bx-low-vision'></i>
              </div>

              <div className='fields inline'>
               <div>
               <input type='checkbox'/><span>Remember Me</span>
               </div>
           <div>
           <li><a href='#'>Forgot Your PIN?</a></li>
           </div>
              </div>
              <div className='fields'>
                  <button>Login</button>
              </div>

              <div className='fields d-flex'>
                  <hr className='line'/>
                  <p>or</p>
                  <hr className='line'/>
              </div>
              <div className='dont-account'>
                <p>Don`t have an account? <a href='#'> SignUp</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login