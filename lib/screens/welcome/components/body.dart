import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:letsmeet/screens/welcome/components/background.dart';
import 'package:flutter_svg/svg.dart';

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // provided total h and w of our screen
    Size size = MediaQuery.of(context).size;
    return Background(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text(
          "Welcome to LetsMeet",
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        SvgPicture.asset(
          "assets/icons/chat.svg",
          height: size.height * 0.5,
        )
      ],
    ));
  }
}
