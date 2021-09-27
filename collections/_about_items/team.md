---
name: Team
layout: sectionitem
leader_text: Find out who operates the facility
leader_image: /assets/img/sections/section_tiles/marvin-meyer-SYTO3xs06fU-unsplash.2e16d0ba.fill-1000x500.jpg
header_backgroung_image: /assets/img/backgrounds/marvin-meyer-SYTO3xs06fU-unsplas.2e16d0ba.fill-2000x1000.jpg
permalink: /about/team
---

Find out about the team:

{% for staff_member in site.staff_members %}
  <h2>
    <a href="{{ staff_member.url }}">
      {{ staff_member.name }} - {{ staff_member.position }}
    </a>
  </h2>
  <p>{{ staff_member.content | markdownify }}</p>
{% endfor %}