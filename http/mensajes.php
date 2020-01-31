
<?php
    $comentarios = array(
        array(
            "postId"=> 1,
            "id"=> 1,
            "name"=> "Pepito Sarlanga",
            "email"=> "tegridyfarms@gardner.biz",
            "body"=> "Hola PHP!!!!!!!!!!! laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        ),
        array(
            "postId"=> 1,
            "id"=> 2,
            "name"=> "Jupiter getsit",
            "email"=> "funeralswithcake@sydney.com",
            "body"=> "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        ) 
    );

    echo json_encode($comentarios);
?>