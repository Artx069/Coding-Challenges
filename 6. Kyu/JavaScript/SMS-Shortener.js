"use strict";

/*
SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.

Your task is to shorten the message to 160 characters, starting from end, by replacing spaces with camelCase, as much as necessary.

If all the spaces are replaced but the resulting message is still longer than 160 characters, just return that resulting message.

Example 1:

Original message (169 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.
Shortened message (160 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.
Example 2:

Original message (269 chars):

SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.
Shortened message (228 chars):

SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.
*/
var shortener = function (message) {
  while (message.length > 160 && message.indexOf(" ") != -1) {
    let lastIndexOfWhitespace = message.lastIndexOf(" ");
    message =
      message.substring(0, lastIndexOfWhitespace) +
      message
        .substring(lastIndexOfWhitespace + 1, lastIndexOfWhitespace + 2)
        .toUpperCase() +
      message.substring(lastIndexOfWhitespace + 2);
  }

  return message;
};
