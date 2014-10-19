<?php

require_once('twitter-api-php/TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "95208577-kxz07YMQ6uhJB4miqQ7rx2FYfWDminRvH80IiPh0",
    'oauth_access_token_secret' => "ICJh0watZCcH5DvDShOcPJKCqLIcKquN7p55Nfcd3xA",
    'consumer_key' => "DSc9NKeKgCxzKlhxGu5Q9w",
    'consumer_secret' => "du3L2bnlBeRhlIOuyWDGyZ1sA2iFQHxEsRz05oKelCE"
);


// $url = 'https://api.twitter.com/1.1/search/tweets.json';
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

// $getfield = '?q=#GITW&result_type=mixed&count=30';
// $getfield = '?q=#Connecther&result_type=popular&count=30';
$getfield = '?screen_name=Connecther&count=100';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$response = $twitter->setGetfield($getfield)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

echo $response;

?>

<html>
<head>
	<title></title>
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script type="text/javascript">
		var tweets = <?php echo $response; ?>;
		console.log(tweets);
	</script>
</head>
<body>

</body>
</html>