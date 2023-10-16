import React from 'react'
import { Container, Image } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Upt = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
        
  <Container className='upt'>
    <h2 className='my-4 text-center bg-dark p-4'>
        Upcomming <span style={{color:'green'}}>Tamil Movies</span> Are 
    </h2>
  <Carousel responsive={responsive} className='my-5'>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1687397648434-rzSBCrS7ZSkB8quje1Na31gRze.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-1693451864-e3mAfFdiKrdhQ3lHtzGRYBWDggj.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/Movie-posters-7-1695716990.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1687404083911-5Z8hNvpenAJJrtTFONoytov7zW9.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-1687245331-rlPTdgLfgsSv8WiQXRZ2AVIDwAi.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1687404714333-xBhMMsecCEc22OgJri8BbYzxdZt.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1683831069765-oHBc4GCO9sAr1c7lxGvelKnW1zu.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1687210297181-1dLw3mpvYn8f4kSA5aRM6jOqrPb.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
 
</div>

</Carousel>
  </Container>

  <Container className='upt'>
    <h2 className='my-4 text-center bg-dark p-4'>
        Upcomming <span style={{color:'green'}}>Hollywood Movies</span> Are 
    </h2>
  <Carousel responsive={responsive} className='my-5'>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1690421366606-4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1682881848133-uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1690417566257-A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1687202191589-mxfBVCK0GkOxfPugN3v6f9zRI9z.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1690422143076-8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1690415270633-r2J02Z2OpNTctfOSN1Ydgii51I3.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1690415954050-rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
</div>
<div> 
 <Image src="https://www.91-cdn.com/metareel-images/content/posters-7-1690464436470-gPbM0MK8CP8A174rmUwGsADNYKD.jpg?tr=h-350,q-40&version=5" alt="" fluid/>
 
</div>

</Carousel>
  </Container>
    </div>
  )
}

export default Upt