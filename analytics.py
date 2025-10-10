import matplotlib.pyplot as plt
import numpy as np

# Define numeric scores for visualization
dynamic_range_scores = [9.5, 9.0, 8.5, 7.5, 7.0, 8.0, 7.5, 7.5, 7.5, 8.5]
color_depth_scores = [9.5, 9.5, 8.5, 8.5, 7.0, 8.5, 8.0, 8.5, 8.0, 8.0]
low_light_scores = [9.5, 9.5, 9.0, 8.0, 7.0, 8.0, 7.0, 9.0, 9.0, 9.0]
speed_scores = [8.5, 9.5, 9.0, 8.5, 7.5, 8.5, 8.0, 9.5, 9.5, 9.0]

categories = ['Dynamic Range', 'Color Depth', 'Low-Light', 'Speed']
soc_names = df['SoC / ISP'].tolist()

# Create radar chart
fig, ax = plt.subplots(figsize=(12, 12), subplot_kw=dict(polar=True))

angles = np.linspace(0, 2 * np.pi, len(categories), endpoint=False).tolist()
angles += angles[:1]

for i, soc in enumerate(soc_names):
    values = [
        dynamic_range_scores[i],
        color_depth_scores[i],
        low_light_scores[i],
        speed_scores[i]
    ]
    values += values[:1]
    ax.plot(angles, values, label=soc)

ax.set_xticks(angles[:-1])
ax.set_xticklabels(categories)
ax.set_yticklabels([])
ax.set_title("Camera SoC Performance Comparison", fontsize=16)
ax.legend(loc='upper right', bbox_to_anchor=(1.3, 1.1))

plt.show()
