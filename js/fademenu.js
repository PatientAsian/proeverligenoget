	$('#myButton').click(function(){
		var $this = $(this);
		$("#videoWrap").fadeToggle();//or .toggle() for instant showing/hiding
        
        $this.toggleClass('videoHidden');
        
		if($this.hasClass('videoHidden')){
			$this.text('Hjælp');			
		} else {
			$this.text('Luk');
		}
	});