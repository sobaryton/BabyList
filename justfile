default:
    @just --list --unsorted

set ignore-comments := true

compress_image input:
    ffmpeg -i {{ input }} \
        -vf "fps=15,scale=iw:-2:flags=lanczos,format=yuv420p" \
        -c:v libwebp \
        -lossless 0 \
        -q:v 60 \
        -loop 0 \
        -preset picture \
        -an \
        -fps_mode vfr \
        -compression_level 6 \
        {{ without_extension(input) }}.webp

compress_video input:
    ffmpeg -i {{ input }} \
        -vf "fps=15,scale=iw:-2:flags=lanczos" \
        -c:v libvpx-vp9 \
        -b:v 0 \
        -crf 35 \
        -an \
        -loop 0 \
        {{ without_extension(input) }}.webm
