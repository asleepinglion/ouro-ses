module.exports = {

  class: "Ses",
  extends: "Class",
  description: "Amazon Simple Email Service (SES).",

  methods: {

    send: {
      description: "Send an email message using Amazon SES.",
      async: true
    }
  }

};
