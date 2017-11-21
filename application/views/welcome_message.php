<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="shortcut icon" type="image/png" href="<?php echo base_url()?>assets/images/Favicon/favicon-32x32.png"/>
	<meta charset="utf-8">
	<title>Score Watch</title>
	<link href="<?php echo base_url();?>assets/temp/css/styles.css" rel="stylesheet">
</head>
<body>
	<header class="header-menu">
		<nav class="primary-nav">
			<ul>
				<li><i class="fa fa-bars primary-nav--icon-menu-bar"></i></li>
				<li>
					<a class="primary-nav--activemenu" href="#"><img src="<?php echo base_url()?>assets/images/menu_predictions@1x.png"><span>predictions</span><span class="badge badge--inplay">1+ New</span><br>
					<div class="primary-nav--highlight"></div></a>
				</li>
				<li>
					<a href="#"><img class="primary-nav--icon-menu-livescore" src="<?php echo base_url()?>assets/images/menu_livescores@1x.png"><span>live scores</span> <span class="badge badge--pregame">1+ New</span><br>
					<div class="primary-nav--highlight"></div></a>
				</li>
				<li class="primary-nav--tooltip">
					<a href="#"><img class="primary-nav--icon-menu-help primary-nav--icon-padding" src="<?php echo base_url()?>assets/images/icon_help@1x.png"> <span class="primary-nav--is-hide-text-menu">help</span><br>
					<div class="primary-nav--highlightmenuright"></div></a> <span class="primary-nav--tooltiptext">Help</span>
				</li>
				<li class="primary-nav--tooltip">
					<a href="#"><img class="primary-nav--icon-menu-about primary-nav--icon-padding" src="<?php echo base_url()?>assets/images/menu_aboutus@1x.png"><span class="primary-nav--is-hide-text-menu">about</span><br>
					<div class="primary-nav--highlightmenuright"></div></a> <span class="primary-nav--tooltiptext">About Us</span>
				</li><!--<li><a href="#"><img class="primary-nav==icon-menu-login primary-nav==icon-padding"src="<?php echo base_url()?>assets/images/menu_login@1x.png"/><span class="primary-nav==is-hide-text-menu">login</span><br><div class="primary-nav==highlightmenuright"></div></a></li>-->
			</ul>
		</nav>
	</header>
	<div class="main-container">
		<div class="row main-contents--prediction main-contents--is-visible">
			<div class="row__prediction">
				<div class="row__inplay-pregame inplay-pregame">
					<div class="row row__inplay inplay-pregame--inplay">
						<div class="header-title header-title--inplay">
							<span>inplay</span>
						</div>
						<div class="match-prediction match-prediction--inplay" data-pridiction-type="inplay">
							<div class="match-prediction--items">
								<div class="match-prediction--kickoff-inplay">
									<span>18:15</span> <span>kickoff</span>
								</div>
								<div class="match-prediction--teamname">
									<span>Gil Vicente</span> <span>Benfica B</span>
								</div>
								<div class="match-prediction--score">
									<span>1</span> <span>0</span>
								</div><br>
								<div class="btn btn--inplay">
									<div><img class="btn--tickicon" src="<?php echo base_url()?>assets/images/icon_tick@2x.png"></div>
									<div>
										<span>Gil Vicente</span>
									</div>
									<div>
										<span>90'</span> <span><img class="btn--watchicon" src="<?php echo base_url()?>assets/images/stopwatch_@1x.png"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="match-prediction match-prediction--inplay" data-pridiction-type="inplay">
							<div class="match-prediction--items">
								<div class="match-prediction--kickoff-inplay">
									<span>18:15</span> <span>kickoff</span>
								</div>
								<div class="match-prediction--teamname">
									<span>Gil Vicente</span> <span>Benfica B</span>
								</div>
								<div class="match-prediction--score">
									<span>1</span> <span>0</span>
								</div><br>
								<div class="btn btn--inplay">
									<div><img class="btn--tickicon" src="<?php echo base_url()?>assets/images/icon_tick@2x.png"></div>
									<div>
										<span>Gil Vicente</span>
									</div>
									<div>
										<span>90'</span> <span><img class="btn--watchicon" src="<?php echo base_url()?>assets/images/stopwatch_@1x.png"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row row__pregame inplay-pregame--pregame">
						<div class="header-title header-title--pregame">
							<span>pregame</span>
						</div>
						<div class="match-prediction match-prediction--pregame" data-pridiction-type="pregame">
							<div class="match-prediction--items">
								<div class="match-prediction--kickoff-pregame">
									<span>18:15</span> <span>kickoff</span>
								</div>
								<div class="match-prediction--teamname">
									<span>Gil Vicente</span> <span>Benfica B</span>
								</div>
								<div class="match-prediction--score">
									<span>1</span> <span>0</span>
								</div><br>
								<div class="btn btn--pregame">
									<div><img class="btn--tickicon" src="<?php echo base_url()?>assets/images/icon_tick@2x.png"></div>
									<div>
										<span>Gil Vicente</span>
									</div>
									<div>
										<span>90'</span> <span><img class="btn--watchicon" src="<?php echo base_url()?>assets/images/stopwatch_@1x.png"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="match-prediction match-prediction--pregame" data-pridiction-type="pregame">
							<div class="match-prediction--items">
								<div class="match-prediction--kickoff-pregame">
									<span>18:15</span> <span>kickoff</span>
								</div>
								<div class="match-prediction--teamname">
									<span>Gil Vicente</span> <span>Benfica B</span>
								</div>
								<div class="match-prediction--score">
									<span>1</span> <span>0</span>
								</div><br>
								<div class="btn btn--pregame">
									<div><img class="btn--tickicon" src="<?php echo base_url()?>assets/images/icon_tick@2x.png"></div>
									<div>
										<span>Gil Vicente</span>
									</div>
									<div>
										<span>90'</span> <span><img class="btn--watchicon" src="<?php echo base_url()?>assets/images/stopwatch_@1x.png"></span>
									</div>
								</div>
							</div>
						</div>
					</div><br>
					<!--<div class="footer">footer</div>-->
				</div>
			</div>
			<div class="row__prediction-detail fade-in">
				<div class="no-match-prediction">
					<span>no match selected</span><br>
					<img src="assets/images/livescore_empty.png"><br>
					<p>Select a match from the left to see it's detail here!</p>
				</div>
				<predictiondetail></predictiondetail>
			</div>
		</div>
		<div class="row main-contents--livescore">
			<div class="row__livescore">
				<div class="row__inplay-pregame inplay-pregame">
					<div class="row row__inplay inplay-pregame--inplay">
						<div class="header-title--livescore">
							<div><img src="<?php echo base_url()?>assets/images/menu_livescores@1x.png"/></div>
							<div><span>Germany Oberliga Bade-Wurttemberg</span></div>
						</div>
						<div class="match-livescore">
							<ul>
								<li>
									<div class="match-livescore match-livescore--items" title="test1">
										<div class="match-livescore--kickoff">
											<span>17:00</span> <span>kickoff</span>
										</div>
										<div class="match-livescore--teamname">
											<span>SC Ostbahn XI</span> <span>SC Mannsworth</span>
										</div>
										<div class="match-livescore--score">
											<span>1</span> <span>0</span>
										</div>
									</div>
								</li>
								<li>
									<div class="match-livescore match-livescore--items">
										<div class="match-livescore--kickoff">
											<span>17:00</span> <span>kickoff</span>
										</div>
										<div class="match-livescore--teamname">
											<span>SC Ostbahn XI</span> <span>SC Mannsworth</span>
										</div>
										<div class="match-livescore--score">
											<span>1</span> <span>0</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="row row__pregame inplay-pregame--pregame">
						<div class="header-title--livescore">
							<div><img src="<?php echo base_url()?>assets/images/menu_livescores@1x.png"/></div>
							<div><span>Germany Oberliga Bade-Wurttemberg</span></div>
						</div>
						<div class="match-livescore">
							<ul>
								<li>
									<div class="match-livescore match-livescore--items">
										<div class="match-livescore--kickoff">
											<span>17:00</span> <span>kickoff</span>
										</div>
										<div class="match-livescore--teamname">
											<span>SC Ostbahn XI</span> <span>SC Mannsworth</span>
										</div>
										<div class="match-livescore--score">
											<span>1</span> <span>0</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div><br>
					<!--<div class="footer">footer</div>-->
				</div>
			</div>
			<div class="row__livescore-detail fade-in">
				<div class="no-match-livescore">
					<span>no match selected</span><br>
					<img src="assets/images/livescore_empty.png"><br>
					<p>Select a match from the left to see it's detail here!</p>
				</div>
				<livescoredetail>
					<template scope="{msg}">
						<livecastlivescore :msg="msg"></livecastlivescore>
					</template>
				</livescoredetail>
			</div>
		</div>
	</div>

	<div class="side-bar-menu">
		<div class="side-bar-search-content" onclick="event.cancelBubble=true;">
			<div class="side-bar-search-content--logo">
				<img height="92" src="<?php echo base_url()?>assets/images/logo@1x.png" width="293"> <a class="side-bar-search-content--btnclosemenu">&times;</a>
			</div>
			<div class="side-bar-search-content--input-search">
				<img height="30" src="<?php echo base_url()?>assets/images/search.png" width="30"> <input placeholder="Search for a match" type="text">
			</div>
			<div class="sidebar-list-menu">
				<nav>
					<ul>
						<li>
							<a>
							<div class="sidebar-list-menu--activemenu"></div><img src="<?php echo base_url()?>assets/images/menu_predictions@1x.png"><span>predictions</span></a>
						</li>
						<li>
							<a>
							<div></div><img class="sidebar-list-menu--icon-livescores" src="<?php echo base_url()?>assets/images/menu_livescores@1x.png"><span>live scores</span></a>
						</li>
						<li>
							<a>
							<div></div><img src="<?php echo base_url()?>assets/images/menu_aboutus@1x.png"><span>about us</span></a>
						</li>
						<li>
							<a>
							<div></div><img src="<?php echo base_url()?>assets/images/menu_login@1x.png"><span>login/sign up</span></a>
						</li>
					</ul>
				</nav>
				<div>
					footer
				</div>
			</div>
		</div>
	</div>

	<div class="help-container">
		<div class="help-content"  onclick="event.cancelBubble=true;">
			<div class="help-content--header">
				<span>Help & Info</span>
				<span>A quick overview of how to make the most of Score.Watch</span>
				<span class="help-content--btnclosemenu">&times;</span>
			</div>
			<div class="help-content--content">
				<ul>
					<li>
						<div><img src="<?php echo base_url()?>assets/images/help-1.png" alt=""></div>
						<div>
							<span>Keep an eye on Predictions</span>
							<span>Using our deep information network, our algorithms calculate and deduce the most likely outcome of the match. Each prediction is valid for a set amount of time, so be sure to keep an eye out for its validity!</span>
						</div>
					</li>
					<li>
						<div><img src="<?php echo base_url()?>assets/images/help-2.png" alt=""></div>
						<div>
							<span>Pre-Game & In-Play Predictionss</span>
							<span>For matches that are live, the In-Play Predictions are updated constantly, taking into account changes to the match as it plays out. All In-Play matches are colored orange. Matches that are yet to be played, or are ‘Pre-game’, are colored green.</span>
						</div>
					</li>
					<li>
						<div><img src="<?php echo base_url()?>assets/images/help-3.png" alt=""></div>
						<div>
							<span>Handicaps, Odds & OUs</span>
							<span>In a Match’s details screen, Odds for the match outcome, and if available, the Over-Under [a fixed amount of goals - OU] are shown. Handicaps under the Odds represent the amount by which the home team’s score is adjusted at the end of the match</span>
						</div>
					</li>
					<li>
						<div><img src="<?php echo base_url()?>assets/images/help-4.png" alt=""></div>
						<div>
							<span>Expired Predictions</span>
							<span>Once a match has been completed, the last made predictions are shown 
							along with the actual outcome of the match. Matches that have recently just 
							been completed will stay in their respective sections for a short duration 
							before being moved to the Expired sections.</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="about-container">
	<div class="about-content"  onclick="event.cancelBubble=true;">
			<div class="about-content--header">
				<img src="<?php echo base_url()?>assets/images/logo@1x.png" alt="">
				<span class="about-content--btnclosemenu">&times;</span>
			</div>
			<div class="about-content--content">
				<div class="about-content--content--items">
					<div>
						<img src="<?php echo base_url()?>assets/images/about_syndication@1x.png" alt="">
						<span class="about-content--content--about-syn">syndication</span>
					</div>
					<div>
						<span>Leveraging the many networks and existing connections that already exist 
						in the world of football-related live scores, news & predictions! Built upon 
						reliable networks that are totally immersed in the scene from the underground 
						tips to the backroom insights, all collected and refined through a reliable 
						mechanism that has been the cornerstone of competitive odds</span>
					</div>
				</div>
				<div class="about-content--content--items">
					<div>
						<img src="<?php echo base_url()?>assets/images/about_ai@1x.png" alt="">
						<span class="about-content--content--about-ai">Advanced A.I</span>
					</div>
					<div>
						<span>Building the systems of tomorrow, that make use of the many advances in 
						Artificial Intelligence, for faster, more accurate information! We make use of 
						the latest, most powerful and accurate AI systems that have ever been put to use 
						with sports information. This gives us the ability to send a large amount of 
						data to the servers, and compute with great accuracy the likely results!</span>
					</div>
				</div>
				<div class="about-content--content--items">
					<div>
						<img src="<?php echo base_url()?>assets/images/about_professionals@1x.png" alt="">
						<span class="about-content--content--about-pro">Independent Professionals</span>
					</div>
					<div>
						<span>Stay ahead of the game with collected insights, information and knowledge 
						from our network of independent professionals! With the flexibility of automation, 
						it is possible for us to gather data from a large selection of individual tipsters, 
						which gives access to the bigger picture, the reasoning and the likelihoods behind 
						different odds available on the market at any time!</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="<?php echo base_url()?>assets/temp/js/App.js">
	</script>
</body>
</html>