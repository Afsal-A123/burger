import { Button } from '@mui/material';
import './Info.css';
export default function Info()
{
    return(

        <section id="samples" class="boldSection btFrame topSpaced bottomSemiSpaced gutter boxed inherit">
  <div class="port">
    <div class="boldCell">
      <div class="boldCellInner">
        <div class="boldRow">
          <div class="boldRowInner">
            <div class="rowItem col-md-12 col-ms-12 btTextCenter animate animate-fadein inherit animated" data-width="12">
              <div class="rowItemContent">
                <header class="header btClear extralarge  bold btAccentBackgroundSuperheadline">
                  <div class="btSuperTitle"><span>TASTY &amp; CRUNCHY</span></div>
                  <div class="dash">
                    <h1><span class="headline">Choose &amp; enjoy</span></h1>
                  </div>
                  <div class="btSubTitle">
                   Our Supporting Branches of our shop
                    <br /> Check And Use It for your needs
                  </div>
                </header>
                <div class="btClear btSeparator topSemiSpaced noBorder"><hr /></div>
              </div>
            </div>
          </div>
        </div>

        
        <div class="boldRowHorizontal">
          <div class="boldRow">
            <div class="boldRowInner">
              <div class="rowItem col-md-6 col-sm-12 btTextCenter animate animate-fadein inherit animated" data-width="6">
                <div class="rowItemContent">
                  <div class="bpgPhoto btZoomInHoverType btOutlinedImage out-right">
                    <a href="https://fast-food.bold-themes.com/main-demo/home-landing/home-burgers/" target="_blank" title="">
                      <div class="boldPhotoBox">
                        <div class="bpbItem">
                          <div class="btImage">
                            <img decoding="async" src="https://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/02/landing-burgers.jpg" alt="" title="" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="btClear btSeparator topSmallSpaced bottomSmallSpaced noBorder"></div>
                  <Button variant='contained' color='success'>
                        BURGERS HOME
                 </Button>
                  <div class="btClear btSeparator topSemiSpaced noBorder"></div>
                </div>
              </div>

              <div class="rowItem col-md-6 col-sm-12 btTextCenter animate animate-fadein inherit animated" data-width="6">
                <div class="rowItemContent">
                  <div class="bpgPhoto btZoomInHoverType btOutlinedImage out-right">
                    <a href="https://fast-food.bold-themes.com/main-demo/home-landing/home-food-truck/" target="_blank" title="">
                      <div class="boldPhotoBox">
                        <div class="bpbItem">
                          <div class="btImage">
                            <img decoding="async" src="https://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/02/landing-food-truck.jpg" alt="" title="" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="btClear btSeparator topSmallSpaced bottomSmallSpaced noBorder"></div>
                  <Button variant='contained' color='success'>
                        FOOD TRUCK HOME
                 </Button>
                  <div class="btClear btSeparator topSemiSpaced noBorder"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
</section>

);
}
