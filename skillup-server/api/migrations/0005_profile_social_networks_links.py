# Generated by Django 5.1 on 2024-09-12 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_category_deleted_at_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='social_networks_links',
            field=models.JSONField(blank=True, default=dict),
        ),
    ]
