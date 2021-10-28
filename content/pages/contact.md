---
title: Contact
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: >
      ¡Hola! Gracias por tu interés en que trabajemos juntos. Por favor
      diligencia el siguiente formulario o enviame un email a
      <da.soler.laverde@gmail.com>
    form_id: contactForm
    form_action: /thank-you
    form_fields:
      - input_type: text
        name: name
        label: Nombre
        default_value: Tu nombre
        is_required: true
        options:
          - lorem-ipsum
      - input_type: email
        name: email
        label: Correo electrónico
        default_value: Tu correo electrónico
        is_required: true
      - input_type: select
        name: Asunto
        label: Subject
        default_value: Please select
        options:
          - Oferta laboral
          - Desarrollo de proyecto
          - Ideas de negocio
      - input_type: textarea
        name: message
        label: Mensaje
        default_value: Escribe tu mensaje aquí...
        is_required: true
    submit_label: Enviar mensaje
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
