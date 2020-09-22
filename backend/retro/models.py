from django.db import models

# Create your models here.

class Comment(models.Model):
    GROUP_CHOICES = [
        ('bad', 'bad'),
        ('well', 'well'),
        ('improve', 'improve'),
        ('action', 'action')
    ]
    text = models.CharField(max_length=500)
    group = models.CharField(max_length=7, choices=GROUP_CHOICES, default='bad')