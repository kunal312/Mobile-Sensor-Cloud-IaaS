<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.14.3/ui-bootstrap-tpls.js"></script>
<script src="https://rawgit.com/rzajac/angularjs-slider/master/dist/rzslider.js"></script>
<div ng-app="rzSliderDemo">
    <div ng-controller="MainCtrl" class="wrapper">
        <header>
             <h1>AngularJS Touch Slider</h1>

        </header>

        <article>
             <h2>Range slider</h2>
Min Value:
            <input type="number" ng-model="minRangeSlider.minValue" />
            <br/>Max Value:
            <input type="number" ng-model="minRangeSlider.maxValue" />
            <br/>
            <rzslider rz-slider-model="minRangeSlider.minValue" rz-slider-high="minRangeSlider.maxValue" rz-slider-options="minRangeSlider.options"></rzslider>
        </article>
        <article>
             <h2>Slider with visible selection bar</h2>

            <rzslider rz-slider-model="slider_visible_bar.value" rz-slider-options="slider_visible_bar.options"></rzslider>
        </article>
        
      

       
     
    </div>
</div>