var PMB = PMB || {};
PMB.Gallery = ( function() {
	
	function Gallery( jElement, opts ) {
		this.jElement = jElement;
		this.items = jElement.find(".caseStudyDesc");
		this.isInitialised = false;
		this.current = 0;

		this.initialise();
	}

	Gallery.prototype = {
	
		initialise : function() {
		
			// maybe extend to add the button here rather than being hard coded in DOM
		
			this.jElement
				.on( "click", ".next", $.proxy( function() {
					this.next.apply( this ); 
					return false;
				}, this ))
				.on( "click", ".prev", $.proxy( function() {
					this.previous.apply( this );
					return false;
				}, this ));	
				
			this._isInitialised = true;
			
		},
	
		next : function() {
		
			this.current++;
			
			if( this.current >= this.items.length ) {
				this.current = 0;				
			}
			
			this.renderItems();

		},

		previous: function() {
				
			this.current--;
			
			if ( this.current < 0 ) {
				this.current = this.items.length - 1;
			}
			
			this.renderItems();

		},
		
		isInitialised : function() {
			return this._isInitialised;
		},
		
		renderItems : function() {
			this.items
				.eq(this.current)
					.addClass('visible')
					.siblings().removeClass('visible');
		}
		
	}

	return Gallery;
	
})();