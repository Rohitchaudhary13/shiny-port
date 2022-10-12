import React from 'react'
import i from '../../assets/i.jpg';
import s from '../../assets/s.jpg';
import v from '../../assets/v.jpg';
import goli from '../../assets/goli.png';
import '../Testimonials/Testimonials.css';
import { Pagination,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: i,
    name: 'Imran Khan',
    desig: 'PP @Infosys',
    review: 'Always available to help, incredibly proficient, hits deadlines without fail, hard working and trustworthy. In my experience, no project is too much trouble, and with Rohit you really get a rare entity – someone that can simplify what can be a very complex industry at times.   I can recommend his services without hesitation.',
  },
  {
    avatar: goli,
    name: 'Utkarsh Goel',
    desig: 'SDE Intern',
    review: `In addition to completing his task on schedule and according to plan, Rohit also paid close attention to how the site looked and worked. He obviously takes a great deal of pleasure in his job, and I wouldn't think twice about recommending him.`,
  },
  {
    avatar: v,
    name: 'Vanshita Singh',
    desig: 'UI/UX Designer @Cervello',
    review: 'Rohit produced superior design work that was smart, had a big effect, and paid extraordinary attention to detail. His early communication was first-rate, and he shown a commitment to keep working until the ideal design was reached. A completely brilliant and professional leader that I am so happy I worked with. ',
  },
  {
    avatar: s,
    name: 'Satyam Singh',
    desig: 'SDE Intern',
    review: 'Rohit is a fantastic programmer. He is well-versed in the IT industry. The most serious and focused boy I have ever met. He gives everything he has to whatever task has been given to him. I honestly wish there were more like Rohit, but I don’t think there are. It’s why he is, and will continue to be highly in demand.',
  },

]

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h3 className='head'>What Do People Say</h3>
        <h1 className='heading'>Testimonials</h1>
        <Swiper className='testimonial__container'
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          >
            {data.map(({avatar, name, desig, review}, index) => {
              return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='avatar'>
                  <img src={avatar} width={64} height={64}/>
                </div>
                <h3 className='avatar-name'>{name}</h3>
                <h5 className='avatar-desig'>{desig}</h5>
                <small className='avatar-review'>{review}
                </small>
              </SwiperSlide>
              )
            })}
            </Swiper>
    </section>
  )
}
export default Testimonials