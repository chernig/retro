# Generated by Django 3.1.1 on 2020-09-18 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('retro', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='group',
            field=models.CharField(choices=[('bad', 'bad'), ('well', 'well'), ('improve', 'improve'), ('action', 'action')], default='bad', max_length=7),
        ),
    ]
