<?php
  include "config.php";
  $db->query("set names utf8");
  $db->query("insert into userinfo(name,pwd,QQ) values('".$_POST['user']."','".$_POST['passwd']."','".$_POST['qq']."')");
  echo $db;
?>