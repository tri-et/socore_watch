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
				<div class="prediction-detail">
					<div class="prediction-detail--toolbar">
						<div class="prediction-detail--toolbar--back-icon">
							<i class="material-icons">keyboard_backspace</i> <span>Back</span>
						</div>
						<div class="prediction-detail--toolbar--opentab-icon">
							<i class="material-icons">open_in_new</i>
						</div>
					</div>
					<div class="prediction-detail-content">
						<div class="prediction-detail-content--header-team">
							<div class="prediction-detail-content--btn">
								<div>
									<span>Gil Vicente Gil Vicente</span>
								</div><span>[0.5]</span> <span>&nbsp;@&nbsp;</span> <span>0.91</span> <span><img src="<?php echo base_url()?>assets/images/stopwatch_@1x.png"></span> <span>-&nbsp;</span>
							</div>
							<div class="prediction-detail-content--header-team">
								<div class="prediction-detail-content--panel-live">
									<span>live</span><br>
									<span>86'</span>
								</div>
								<div class="prediction-detail-content--team-score">
									<div class="prediction-detail-content--team-score--home">
										<span>home</span>
									</div>
									<div class="prediction-detail-content--team-score--comma">
										<span>3</span><span>:</span><span>0</span>
									</div>
									<div class="prediction-detail-content--team-score--away">
										<span>away</span>
									</div>
								</div>
							</div>
						</div>
						<div class="prediction-detail-content--header-team--stats-livestream-menu">
							<div class="row">
								<div class="row__6 prediction-detail-content--header-team--stats-livestream prediction-detail-content--header-team--active">
									<span>stats</span>
								</div>
								<div class="row__6 prediction-detail-content--header-team--stats-livestream">
									<span>live stream</span>
								</div>
							</div>
						</div>
						<div class="prediction-detail-content--stats-livestream-content">
							<div class="prediction-detail-content--stats prediction-detail-content--is-visible">
								<div class="odds-ou-header">
									<div>
										<span>ODDS</span>
									</div>
									<div>
										<span>Handicap</span>
									</div>
									<div>
										<span>Home</span>
									</div>
									<div>
										<span>Away</span>
									</div>
								</div>
								<div class="odds-ou-content">
									<div class="odds-ou-content--m8">
										<span>M8</span>
									</div>
									<div>
										<span>-2.00</span>
									</div>
									<div>
										<span>0.99</span>
									</div>
									<div>
										<span>0.96</span>
									</div>
								</div>
								<div class="odds-ou-content">
									<div>
										<span>sbo</span>
									</div>
									<div>
										<span>-2.50</span>
									</div>
									<div>
										<span>0.99</span>
									</div>
									<div>
										<span>0.96</span>
									</div>
								</div>
								<div class="odds-ou-content">
									<div>
										<span>ibc</span>
									</div>
									<div>
										<span>-2.00</span>
									</div>
									<div>
										<span>0.99</span>
									</div>
									<div>
										<span>0.96</span>
									</div>
								</div><!-- end Odds-->
								<!--start OD-->
								<div class="odds-ou-header">
									<div>
										<span>OU</span>
									</div>
									<div>
										<span>Total Goals</span>
									</div>
									<div>
										<span>Over</span>
									</div>
									<div>
										<span>Under</span>
									</div>
								</div>
								<div class="odds-ou-content">
									<div class="odds-ou-content--m8">
										<span>M8</span>
									</div>
									<div>
										<span>-2.00</span>
									</div>
									<div>
										<span>0.99</span>
									</div>
									<div>
										<span>0.96</span>
									</div>
								</div>
								<div class="odds-ou-content">
									<div>
										<span>sbo</span>
									</div>
									<div>
										<span>-2.50</span>
									</div>
									<div>
										<span>0.99</span>
									</div>
									<div>
										<span>0.96</span>
									</div>
								</div>
								<div class="odds-ou-content">
									<div>
										<span>ibc</span>
									</div>
									<div>
										<span>-2.00</span>
									</div>
									<div>
										<span>0.99</span>
									</div>
									<div>
										<span>0.96</span>
									</div>
								</div><!-- end OU-->
							</div>
							<div class="prediction-detail-content--livestream"></div>
						</div>
					</div>
				</div>
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
				<div class="livescore-detail">
					<div class="livescore-detail--toolbar">
						<div class="livescore-detail--toolbar--back-icon">
                            <i class="material-icons">keyboard_backspace</i>
                            <span>Back</span>
                        </div>
						<div class="livescore-detail--toolbar--opentab-icon">
							<i class="material-icons">open_in_new</i>
						</div>
					</div>
					<div class="livescore-detail-content">
						<div class="livescore-detail-content--header">
							<div class="livescore-detail-content--header--teamname">
								<span>Arsenal</span>
								<span>Swansea City</span>
							</div>
							<div class="livescore-detail-content--header--score">
								<span>0</span>
								<span>1</span>
							</div>
						</div>
						<div class="livescore-detail-content--stats-timeline">
							<div class="livescore-detail-content--header-league">
								<div class="livescore-detail-content--header-league--league">
									<span>kickoff</span>
									<span>league</span>
								</div>
								<div class="livescore-detail-content--header-league--nameleague">
									<span>10:45</span>
									<span>International Club Friendly</span>
								</div>
							</div>
							<div class="livescore-detail-content--header-stats-timeline">
								<div><span>home</span></div>
								<div><span>stats</span></div>
								<div><span>away</span></div>
							</div>
							<div class="livescore-detail-content--stats-detail">
								<ul>
									<li>
										<div><span>1</span></div>
										<div><hr class="livescore-detail-content--home-percent-line"></div>
										<div><span>shots</span></div>
										<div><hr class="livescore-detail-content--away-percent-line"></div>
										<div><span>2</span></div>
									</li>
									<li>
										<div><span>1</span></div>
										<div><hr class="livescore-detail-content--home-percent-line"></div>
										<div><span>off target</span></div>
										<div><hr class="livescore-detail-content--away-percent-line"></div>
										<div><span>20</span></div>
									</li>
									<li>
										<div><span>1</span></div>
										<div><hr class="livescore-detail-content--home-percent-line"></div>
										<div><span>corner kicks</span></div>
										<div><hr class="livescore-detail-content--away-percent-line"></div>
										<div><span>20</span></div>
									</li>
									<li>
										<div><span>1</span></div>
										<div><hr class="livescore-detail-content--home-percent-line"></div>
										<div><span>yellow cards</span></div>
										<div><hr class="livescore-detail-content--away-percent-line"></div>
										<div><span>20</span></div>
									</li>
									<li>
									<div><span>1</span></div>
										<div><hr class="livescore-detail-content--home-percent-line"></div>
										<div><span>red cards</span></div>
										<div><hr class="livescore-detail-content--away-percent-line"></div>
										<div><span>20</span></div>
									</li>
								</ul>
							</div>
							<div class="livescore-detail-content--header-stats-timeline">
								<div><span>home</span></div>
								<div><span>timeline</span></div>
								<div><span>away</span></div>
							</div>
							<div class="livescore-detail-content--timeline-detail">
								<ul>
									<li>
										<div><img src="<?php echo base_url()?>assets/images/iconl/1.gif" alt=""></div>
										<div><span>testting</span></div>
										<div><span>86'</span></div>
										<div><span>testting1</span></div>
										<div><img src="<?php echo base_url()?>assets/images/iconl/1.gif" alt=""></div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
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
	<script src="<?php echo base_url()?>assets/temp/js/App.js">
	</script>
</body>
</html>