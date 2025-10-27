"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";
import { Project } from "@/lib/project-data";

const ProjectCard: React.FC<Project> = ({
  id,
  name,
  city,
  year,
  type,
  region,
  images,
}) => {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${id}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            unoptimized
            className={styles.image}
          />
          <div className={styles.gradientOverlay}>
            <div className={styles.imageInfo}>
              <span className={styles.city}>{city}</span>
              <span className={styles.year}>{year}</span>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.subtitle}>
              {type} · {region}
            </p>
          </div>
          <div className={styles.badge}>{images.length} photos</div>
        </div>
      </Link>

      <div className={styles.buttonContainer}>
        <button
          className={styles.galleryButton}
          onClick={(e) => {
            e.preventDefault();
            //onViewGallery?.(id, 0);
          }}
        >
          View Gallery
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
