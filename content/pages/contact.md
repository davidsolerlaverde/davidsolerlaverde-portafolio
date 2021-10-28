---
title: ¡Hablemos!
hide_title: false
sections:
  - section_id: lorem-ipsum
    content: >-
      ## Lorem ipsum


      Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.


      - Lorem ipsum

      - dolor sit amet
    form_id: lorem-ipsum
    form_action: lorem-ipsum
    form_fields:
      - input_type: text
        name: name
        label: Nombre
        default_value: Tu nombre
        options: []
        is_required: true
      - input_type: email
        name: Correo Electrónico
        label: Email
        default_value: Tu correo electrónico
        options: []
        is_required: true
      - input_type: select
        name: Asunto
        label: Asunto
        default_value: lorem-ipsum
        options: []
        is_required: false
    submit_label: Enviar mensaje
    type: section_form
seo:
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: advanced
---
