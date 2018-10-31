

var Routine = (function() {
	

	function init() {
		
		[].slice.call( document.querySelectorAll( '.dr-menu' ) ).forEach( function( el, i ) {

			var trigger = el.querySelector( 'div.dr-trigger' ),
				lists = document.getElementById( 'links' ),
				list = lists.querySelectorAll("li"),
				icon = trigger.querySelector( 'span.dr-icon-menu' ),
				controltime = document.getElementById('time'),
				diamond = document.querySelectorAll("div.icon"),
				open = false,
				time = false;

			trigger.addEventListener( 'click', function( event ) {
				if( !open ) {
					el.className += ' dr-menu-open';
					diamond.className += ' dr-open';
					open = true;
				} 
			}, false );

			controltime.addEventListener( 'click', function( event ) {
				if( !time ) {
					el.className += ' dr-time';
					time = true;
					controltime.innerHTML = "Hide Time"
				}
				else{
					el.className = el.className.replace(/\bdr-time\b/,'');
					time = false;
					controltime.innerHTML = "Show Time"
				}
			}, false );
			
			icon.addEventListener( 'click', function( event ) {
				if( open ) {
					event.stopPropagation();
					open = false;
					time = false;
					controltime.innerHTML = "Show Time"
					el.className = el.className.replace(/\bdr-menu-open\b/,'');
					if(time){
						el.className = el.className.replace(/\bdr-time\b/,'');
				};
				return false;
				}
			}, false );


		});

	}

	init();

})();

	

	(function(){

		var texttotal = ["Water the plant","Breakfast","PlaningBook","Get dressed"];
        var checkall = ["cb2","cb3","cb4","cb5"];
        
		  	
		var handler = function(i) {
			var li = document.createElement('li'),
				 x = document.createElement("SPAN"),
				 input = document.createElement("input"),
				 label = document.createElement("label");
			var checkid = checkall[i];
			var $ = function (selector) {
		    return document.querySelector(selector);
		  		};
		
			input.setAttribute("type", "checkbox");
			input.setAttribute("name", checkid);
			input.setAttribute("id",checkid);
			label.setAttribute("for",checkid);
			var time = document.createTextNode('20min'),
				textnode = texttotal[i],
				text = document.createTextNode(textnode),
			    shapegreyall = document.querySelectorAll('#color_grey'),
			    shapegrey = shapegreyall[i];
			var svg = createSVGEl( ),
			list = document.getElementById("links").querySelectorAll("input"),
			firstlist = list[0];

			function createSVGEl( ) {
				var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				svg.setAttributeNS( null, 'viewBox', '0 0 100 100' );
				svg.setAttribute( 'xmlns', 'http://www.w3.org/2000/svg' );
				return svg;
			};

			function draw( el, type ) {
					var paths = [], 
					    pathDef=['M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'],
						animDef={ speed : .2, easing : 'ease-in-out' },
						svg = el.parentNode.querySelector( 'svg' );
		
					paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );

					
					for( var i = 0, len = paths.length; i < len; ++i ) {
						var path = paths[i];
						svg.appendChild( path );

						path.setAttributeNS( null, 'd', pathDef[i] );

						var length = path.getTotalLength();
						// Clear any previous transition
						//path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
						// Set up the starting positions
						path.style.strokeDasharray = length + ' ' + length;
						if( i === 0 ) {
							path.style.strokeDashoffset = Math.floor( length ) - 1;
						}
						else path.style.strokeDashoffset = length;
						// Trigger a layout so styles are calculated & the browser
						// picks up the starting position before animating
						path.getBoundingClientRect();
						// Define our transition
						path.style.transition = path.style.WebkitTransition = path.style.MozTransition  = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
						// Go!
						path.style.strokeDashoffset = '0';
							}
						};
			function reset( el ) {
					Array.prototype.slice.call( el.parentNode.querySelectorAll( 'svg > path' ) ).forEach( function( el ) { el.parentNode.removeChild( el ); } );
			};

			
			firstlist.addEventListener( 'change', function() {
						if( firstlist.checked ) {
							draw( firstlist, 'cross' );
						}
						else {
						reset( firstlist );
						}
						} );

			function addlist(el, time) {
				x.append(time);
				controlCheckbox( input, 'cross' );
				li.append(input);
				label.append(el);
				li.append(label);
				li.append(x);
				li.appendChild( svg );
				$('#links').appendChild(li);

				function controlCheckbox( el, type) {
			    	el.addEventListener( 'change', function() {
						if( el.checked ) {
							draw( el, type );
						}
						else {
						reset( el );
						}
						} );
				 };
					
			};

			shapegrey.onclick = function(){
				addlist(text, time);
				
			};
			
			
	};
	
	
		handler(0);
		handler(1);
		handler(2);
		handler(3);

	})();





